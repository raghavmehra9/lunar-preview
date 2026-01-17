import { DetailProps, TithiDetails } from "../Type";
import CouncilCard from "./CouncilCard";

const TithiSection = ({ data }: DetailProps<TithiDetails>) => {
  return (
    <CouncilCard title="tithi" subTitle={data?.name}>
      {data && data.meaning && (
        <CouncilCard.Body
          value={data.meaning}
          title="tithi"
          className="font-Avenir-regular"
        />
      )}
    </CouncilCard>
  );
};

export default TithiSection;
