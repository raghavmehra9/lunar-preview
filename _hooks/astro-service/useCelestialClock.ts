import { fetchCelestialClock } from "@/api/lunar-services/services";
import { useQuery } from "@tanstack/react-query";

const useCelestialClock = () => {
  return useQuery({
    queryKey: ["service-celestial-clock"],
    queryFn: fetchCelestialClock,
  });
};

export default useCelestialClock;
