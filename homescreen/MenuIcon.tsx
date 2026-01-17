import Svg, { Path } from "react-native-svg";
import { IconDimension } from "../IconTypes";
import { scale } from "@/utils/helpers/sizeMatters";

const MenuIcon = ({ height = scale(22), width = scale(25) }: IconDimension) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 25 22" fill="none">
      <Path
        d="M25 1.625C25 2.48958 24.3021 3.1875 23.4375 3.1875H1.5625C0.697917 3.1875 0 2.48958 0 1.625C0 0.760417 0.697917 0.0625 1.5625 0.0625H23.4375C24.3021 0.0625 25 0.760417 25 1.625ZM6.77083 18.8125H1.5625C0.697917 18.8125 0 19.5104 0 20.375C0 21.2396 0.697917 21.9375 1.5625 21.9375H6.77083C7.63542 21.9375 8.33333 21.2396 8.33333 20.375C8.33333 19.5104 7.63542 18.8125 6.77083 18.8125ZM15.1042 9.4375H1.5625C0.697917 9.4375 0 10.1354 0 11C0 11.8646 0.697917 12.5625 1.5625 12.5625H15.1042C15.9687 12.5625 16.6667 11.8646 16.6667 11C16.6667 10.1354 15.9687 9.4375 15.1042 9.4375Z"
        fill="#883D85"
      />
    </Svg>
  );
};

export default MenuIcon;
