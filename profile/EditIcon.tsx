import { scale } from "@/utils/helpers/sizeMatters";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";
import { IconDimension } from "../IconTypes";

const EditIcon = ({ width = scale(12), height = scale(12) }: IconDimension) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 12 12" fill="none">
      <G clip-path="url(#clip0_135_5608)">
        <Path
          d="M7.41065 2.01562L0.808079 8.61867C0.774861 8.65198 0.750876 8.69405 0.739455 8.73926L0.00762279 11.6767C-0.0142684 11.7651 0.0117155 11.8591 0.0762469 11.9237C0.125074 11.9725 0.191604 11.9995 0.259657 11.9995C0.280501 11.9995 0.301821 11.997 0.32257 11.9917L3.25999 11.2598C3.30577 11.2484 3.34736 11.2245 3.38058 11.1913L9.98372 4.5887L7.41065 2.01562Z"
          fill="white"
        />
        <Path
          d="M11.6193 1.11566L10.8843 0.380687C10.3931 -0.110532 9.53694 -0.110056 9.04629 0.380687L8.146 1.28099L10.719 3.85396L11.6193 2.95366C11.8646 2.70839 11.9998 2.38192 11.9998 2.03471C11.9998 1.6875 11.8646 1.36103 11.6193 1.11566Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_135_5608">
          <Rect width={width} height={height} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default EditIcon;
