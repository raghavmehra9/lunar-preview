import Svg, { Path } from "react-native-svg";
import { scale } from "@/utils/helpers/sizeMatters";
import { IconDimension } from "../IconTypes";

const TowardsRightArrow = ({
  width = scale(20),
  height = scale(10),
}: IconDimension) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 10" fill="none">
      <Path
        d="M19.7709 4.48495C19.7706 4.48472 19.7704 4.48445 19.7702 4.48421L15.688 0.421711C15.3821 0.117375 14.8875 0.118508 14.5831 0.424367C14.2787 0.730188 14.2799 1.22484 14.5857 1.52921L17.3265 4.25671H0.78125C0.349766 4.25671 0 4.60648 0 5.03796C0 5.46945 0.349766 5.81921 0.78125 5.81921H17.3264L14.5857 8.54671C14.2799 8.85109 14.2788 9.34573 14.5831 9.65156C14.8875 9.95745 15.3822 9.95851 15.688 9.65421L19.7702 5.59171C19.7704 5.59148 19.7706 5.5912 19.7709 5.59097C20.0769 5.28558 20.0759 4.78933 19.7709 4.48495Z"
        fill="#63347B"
      />
    </Svg>
  );
};

export default TowardsRightArrow;
