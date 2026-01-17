import Svg, { Path } from "react-native-svg";
import { IconDimension } from "../IconTypes";
import { NavigationTheme } from "@/components/Types";

const HeaderLeftArrow = ({
  width = 12,
  height = 22,
  type = "purple",
}: IconDimension & { type: NavigationTheme }) => {
  const color = {
    purple: "#883D85",
    white: "#fff",
  };
  return (
    <Svg width={width} height={height} viewBox="0 0 12 22" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.74981 1.00088C10.2379 0.512728 11.0294 0.512728 11.5176 1.00088C12.0057 1.48904 12.0057 2.28049 11.5176 2.76865L4.16919 10.117C3.68106 10.6051 3.68106 11.3966 4.16919 11.8847L11.5176 19.2331C12.0057 19.7212 12.0057 20.5127 11.5176 21.0009C11.0294 21.489 10.2379 21.489 9.74981 21.0009L0.6337 11.8847C0.145538 11.3966 0.145538 10.6051 0.6337 10.117L9.74981 1.00088Z"
        fill={color[type]}
      />
    </Svg>
  );
};

export default HeaderLeftArrow;
