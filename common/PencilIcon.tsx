import { scale } from "@/utils/helpers/sizeMatters";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";
import { IconDimension } from "../IconTypes";

const PencilIcon = ({
  width = scale(16),
  height = scale(16),
}: IconDimension) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <G clip-path="url(#clip0_817_1005)">
        <Path
          d="M9.88087 2.68736L1.07744 11.4914C1.03315 11.5358 1.00117 11.5919 0.985939 11.6522L0.0101637 15.5688C-0.0190245 15.6867 0.0156207 15.812 0.101663 15.8981C0.166765 15.9632 0.255472 15.9992 0.346209 15.9992C0.374002 15.9992 0.402428 15.9958 0.430094 15.9888L4.34665 15.0129C4.40769 14.9977 4.46315 14.9658 4.50744 14.9216L13.3116 6.11812L9.88087 2.68736Z"
          fill="white"
        />
        <Path
          d="M15.4924 1.48697L14.5124 0.507003C13.8574 -0.147956 12.7159 -0.147321 12.0617 0.507003L10.8613 1.7074L14.292 5.13803L15.4924 3.93764C15.8195 3.6106 15.9997 3.17532 15.9997 2.71236C15.9997 2.24941 15.8195 1.81413 15.4924 1.48697Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_817_1005">
          <Rect width={width} height={height} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default PencilIcon;
