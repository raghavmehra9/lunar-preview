import { scale } from "@/utils/helpers/sizeMatters";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";
import { IconDimension } from "./IconTypes";

const BrokenComputer = ({
  width = scale(101),
  height = scale(101),
}: IconDimension) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 101 101" fill="none">
      <G clipPath="url(#clip0_1506_6563)">
        <Path
          d="M100.5 74.3205V4.008H0.5V74.3205H40.8885L36.4939 91.8986H24.1328V97.758H76.8672V91.8986H64.5061L60.1115 74.3205H100.5ZM6.35938 9.86737H94.6406V68.4611H6.35938V9.86737ZM58.4666 91.8986H42.5334L46.9279 74.3205H54.0721L58.4666 91.8986Z"
          fill="#ECD6EB"
        />
        <Path
          d="M37.0662 32.8021L41.2094 28.6589L37.0662 24.5158L41.2094 20.3726L37.0662 16.2294L32.923 20.3726L28.7799 16.2294L24.6367 20.3726L28.7799 24.5158L24.6367 28.6589L28.7799 32.8021L32.923 28.6589L37.0662 32.8021Z"
          fill="#ECD6EB"
        />
        <Path
          d="M72.2225 16.2294L68.0793 20.3726L63.9361 16.2294L59.793 20.3726L63.9361 24.5158L59.793 28.6589L63.9361 32.8021L68.0793 28.6589L72.2225 32.8021L76.3656 28.6589L72.2225 24.5158L76.3656 20.3726L72.2225 16.2294Z"
          fill="#ECD6EB"
        />
        <Path
          d="M50.5 39.1643C39.192 39.1643 29.9922 48.3641 29.9922 59.6721V62.6018H35.8516V59.6721C35.8516 51.595 42.4229 45.0237 50.5 45.0237C58.5771 45.0237 65.1484 51.595 65.1484 59.6721V62.6018H71.0078V59.6721C71.0078 48.3641 61.808 39.1643 50.5 39.1643Z"
          fill="#ECD6EB"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1506_6563">
          <Rect
            width="100"
            height="100"
            fill="white"
            transform="translate(0.5 0.882996)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default BrokenComputer;
