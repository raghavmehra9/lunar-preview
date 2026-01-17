import ReportScreen from "@/components/report";
import { ReportType } from "@/components/report/Types";
import { useGlobalSearchParams } from "expo-router";

const Report = () => {
  const { type } = useGlobalSearchParams();
  return <ReportScreen type={type as ReportType} />;
};

export default Report;
