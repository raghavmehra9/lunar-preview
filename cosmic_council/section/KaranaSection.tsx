import { DetailProps, KaranaDetails } from "../Type";
import CouncilCard from "./CouncilCard";

const KaranaSection = ({ data }: DetailProps<KaranaDetails>) => {
  return (
    <CouncilCard title="karan" subTitle={data?.name}>
      {data?.meaning && (
        <CouncilCard.Body label="Meaning" value={data?.meaning} title="karan" />
      )}
      {data?.goodFor && (
        <CouncilCard.Body
          label="Good for"
          value={data?.goodFor}
          title="karan"
        />
      )}
      {data?.avoid && (
        <CouncilCard.Body label="Avoid" value={data?.avoid} title="karan" />
      )}
    </CouncilCard>
  );
};

export default KaranaSection;
