import { moonCalendarService } from "@/api/lunar-services/services";
import { useQuery } from "@tanstack/react-query";

const useMoonCalendar = () => {
  return useQuery({
    queryKey: ["service-moon-calendar"],
    queryFn: moonCalendarService,
  });
};

export default useMoonCalendar;
