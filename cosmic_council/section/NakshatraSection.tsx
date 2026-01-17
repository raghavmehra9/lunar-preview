import { DetailProps, NakshatraDetails } from "../Type";
import CouncilCard from "./CouncilCard";

const NakshatraSection = ({ data }: DetailProps<NakshatraDetails>) => {
  return (
    <CouncilCard title="nakshatra" subTitle={data?.name}>
      {data?.goodFor && (
        <CouncilCard.Body
          label="Good for"
          value={data?.goodFor}
          title="nakshatra"
        />
      )}
      {data?.notGoodFor && (
        <CouncilCard.Body
          label="Not so good for"
          value={data?.notGoodFor}
          title="nakshatra"
        />
      )}
    </CouncilCard>
  );
};

export default NakshatraSection;
