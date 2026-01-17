import {
  Coords,
  getCurrentCoords,
  getIPAddress,
  resolveTimeZone,
  syncUserLocation,
} from "@/api/location";
import { useSession } from "@/context/ctx";
import { useQueryClient } from "@tanstack/react-query";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type LocationData = { coords: Coords };

interface LocationContextType {
  location: LocationData | null;
  currentIP: string | null;

  fetchLocation: (opts?: { force?: boolean }) => Promise<void>;
}

const LocationContext = createContext<LocationContextType | undefined>(
  undefined
);

const MONITOR_INTERVAL_MS = 60 * 1000;
const MAX_AGE_MIN = 30;

export function LocationProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [currentIP, setCurrentIP] = useState<string | null>(null);

  const lastUpdatedRef = useRef<number>(0);
  const inFlightRef = useRef(false);

  const queryClient = useQueryClient();

  const { session, setValue } = useSession();

  const fetchLocation = useCallback(
    async (opts?: { force?: boolean }) => {
      const force = !!opts?.force;

      const ageMin = (Date.now() - lastUpdatedRef.current) / 60000;
      if (!force && ageMin < MAX_AGE_MIN) return;

      if (inFlightRef.current) return;
      inFlightRef.current = true;
      try {
        const coords = await getCurrentCoords();
        if (!coords) return;

        await syncUserLocation(coords);
        queryClient.invalidateQueries({
          queryKey: ["service-moon-calendar", "service-cosmic-council"],
        });
        setLocation({ coords });
        lastUpdatedRef.current = Date.now();

        const tz = await resolveTimeZone(coords.latitude, coords.longitude);
        if (tz && tz !== session?.timeZone) {
          setValue({ ...session, timeZone: tz });
        }
      } catch (e) {
        console.warn("fetchLocation failed:", e);
      } finally {
        inFlightRef.current = false;
      }
    },
    [session, setValue]
  );

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const ip = await getIPAddress();
        if (!isMounted) return;
        setCurrentIP(ip ?? null);
      } catch (e) {
        console.warn("getIPAddress failed:", e);
      }

      await fetchLocation({ force: true });
    })();

    const id = setInterval(async () => {
      await fetchLocation();
    }, MONITOR_INTERVAL_MS);

    return () => {
      isMounted = false;
      clearInterval(id);
    };
  }, [fetchLocation]);

  return (
    <LocationContext.Provider
      value={{
        location,
        currentIP,
        fetchLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export function useLocationIP() {
  const ctx = useContext(LocationContext);
  if (!ctx)
    throw new Error("useLocationIP must be used within a LocationProvider");
  return ctx;
}
