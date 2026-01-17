import { CosmicCrew } from "@/api/lunar-services/types";
import EmptyFragment from "@/components/EmptyFragment";
import { CATEGORY_CARDS } from "@/constants/CategoryTypes";
import { scale } from "@/utils/helpers/sizeMatters";
import { IconDimension } from "../../IconTypes";

type CategoryCardProps = IconDimension & {
  data: CosmicCrew;
};

const CategoryCard = ({ width = scale(286), data }: CategoryCardProps) => {
  const CrewCard =
    data && data?.category_name
      ? CATEGORY_CARDS[data?.category_name]
      : EmptyFragment;
  return <CrewCard width={width} height={scale(280)} />;
};

export default CategoryCard;
