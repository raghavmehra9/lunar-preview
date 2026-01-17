import { scale } from "@/utils/helpers/sizeMatters";
import Svg, { Path } from "react-native-svg";
import { IconDimension } from "../IconTypes";

const Play = ({ width = scale(32), height = scale(30) }: IconDimension) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 30" fill="none">
      <Path
        d="M16 0C7.4397 0 0.5 6.71572 0.5 15C0.5 23.2843 7.4397 30 16 30C24.5603 30 31.5 23.2843 31.5 15C31.5 6.71572 24.5603 0 16 0ZM21.3572 15.7951L13.6072 20.4826C13.4504 20.5774 13.2721 20.625 13.0938 20.625C12.9322 20.625 12.7704 20.5861 12.624 20.5073C12.3161 20.3421 12.125 20.0285 12.125 19.6875V10.3125C12.125 9.97148 12.3161 9.65789 12.624 9.49266C12.932 9.32648 13.3085 9.33656 13.6072 9.51738L21.3572 14.2049C21.6403 14.3766 21.8125 14.6769 21.8125 15C21.8125 15.3231 21.6403 15.6235 21.3572 15.7951Z"
        fill="#F8A296"
      />
    </Svg>
  );
};

export default Play;
