import { scale } from "@/utils/helpers/sizeMatters";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";
import { IconDimension } from "../IconTypes";

const Cross = ({
  width = scale(13),
  height = scale(13),
  color = "#F44336",
}: IconDimension & { color?: string }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 13 13" fill="none">
      <G clip-path="url(#clip0_303_6672)">
        <Path
          d="M12.1933 10.2383L2.78886 0.83386C2.37871 0.423707 1.71375 0.423707 1.30424 0.83386L0.808591 1.32873C0.398438 1.73902 0.398438 2.40398 0.808591 2.81349L10.213 12.2179C10.6233 12.6281 11.2883 12.6281 11.6978 12.2179L12.1926 11.723C12.6036 11.3135 12.6036 10.6484 12.1933 10.2383Z"
          fill={color}
        />
        <Path
          d="M10.213 0.833764L0.808591 10.2382C0.398438 10.6483 0.398438 11.3134 0.808591 11.7229L1.30347 12.2178C1.71375 12.628 2.37871 12.628 2.78822 12.2178L12.1933 2.81403C12.6036 2.40388 12.6036 1.73892 12.1933 1.32941L11.6984 0.834533C11.2883 0.423611 10.6233 0.423611 10.213 0.833764Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_303_6672">
          <Rect
            width="12"
            height="12"
            fill="white"
            transform="translate(0.5 0.5)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Cross;
