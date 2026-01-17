import useAstrologer from "@/_hooks/astro-service/useAstrologer";
import GradientScreen from "../common/GradientScreen";
import ErrorScreen from "../ErrorScreen";
import LoadingScreen from "../LoadingScreen";
import SpaceElement from "../SpaceElement";
import AstrologerContainer from "./section/AstrologerContainer";

const AstrologerScreen = () => {
  const fetchAstrologer = useAstrologer();

  if (
    (fetchAstrologer && fetchAstrologer.isLoading) ||
    !fetchAstrologer?.data
  ) {
    return <LoadingScreen />;
  }

  if (fetchAstrologer.isError) {
    return <ErrorScreen />;
  }

  return (
    <GradientScreen
      heading="Guidance from the Cosmos"
      subHeading="Talk to our expert astrologers and uncover your true path."
    >
      <AstrologerContainer fetchAstrologer={fetchAstrologer} />
      <SpaceElement spacing={40} />
    </GradientScreen>
  );
};

export default AstrologerScreen;
