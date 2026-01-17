import LoadingScreen from "@/components/LoadingScreen";
import { useSession } from "@/context/ctx";
import { useUserDetails } from "@/_hooks/user/useUserDetails";
import HomeScreen from "@/components/home/HomeScreen";

const Home = () => {
  const { isLoading } = useSession();
  const userDetails = useUserDetails();

  if (userDetails?.isLoading || isLoading) {
    return <LoadingScreen />;
  }

  return <HomeScreen />;
};

export default Home;
