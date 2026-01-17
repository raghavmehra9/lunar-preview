import { IconDimension } from "@/assets/svg/IconTypes";
import { scale } from "@/utils/helpers/sizeMatters";
import Svg, {
  Defs,
  G,
  LinearGradient,
  Mask,
  Path,
  Stop,
} from "react-native-svg";

const RegisterCloud = ({
  width = scale(391),
  height = scale(184),
}: IconDimension) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 411 204" fill="none">
      <Path
        opacity="0.6"
        d="M0 203.34C0 203.34 11.465 162.034 30.681 180.043C33.491 182.676 39.678 192.544 39.678 192.544C39.678 192.544 29.348 153.482 56.34 157.917C83.332 162.352 69.158 198.342 69.158 198.342C69.158 198.342 87.081 167.353 101.327 189.011C103.461 192.256 107.325 203.34 107.325 203.34H0Z"
        fill="url(#paint0_linear_578_26343)"
      />
      <Path
        opacity="0.6"
        d="M385.479 168.299C385.479 168.299 391.114 148.003 400.555 156.852C401.936 158.146 404.975 162.995 404.975 162.995C404.975 162.995 399.9 143.801 413.163 145.981C426.426 148.16 419.461 165.844 419.461 165.844C419.461 165.844 428.267 150.617 435.268 161.259C436.317 162.853 438.215 168.3 438.215 168.3H385.479V168.299Z"
        fill="url(#paint1_linear_578_26343)"
      />
      <Path
        opacity="0.6"
        d="M314.004 86.1026C314.004 86.1026 317.929 64.8306 335.591 67.9146C353.253 70.9986 352.412 86.1026 352.412 86.1026C352.412 86.1026 351.851 46.8876 371.476 50.2516C391.101 53.6156 387.456 88.3796 387.456 88.3796C387.456 88.3796 399.231 68.1936 411.847 88.3796L314.004 86.1026Z"
        fill="url(#paint2_linear_578_26343)"
      />
      <Mask
        id="mask0_578_26343"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="131"
        y="0"
        width="99"
        height="100"
      >
        <Path d="M229.913 0H131V100H229.913V0Z" fill="white" />
      </Mask>
      <G mask="url(#mask0_578_26343)">
        <Path
          d="M214.998 71.7967C193.503 80.4587 169.055 70.0543 160.393 48.5587C153.624 31.7598 158.499 13.1581 171.214 1.69727C168.428 2.27933 165.654 3.0989 162.922 4.19998C137.993 14.2445 125.928 42.5956 135.973 67.5233C146.018 92.4511 174.369 104.516 199.297 94.4717C213.34 88.813 223.299 77.3451 227.524 63.9527C223.946 67.2016 219.743 69.8848 214.998 71.7967Z"
          fill="white"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_578_26343"
          x1="53.6628"
          y1="157.567"
          x2="53.6628"
          y2="203.341"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#ECC3CE" />
          <Stop offset="0.7908" stopColor="#F7E6EB" />
          <Stop offset="1" stopColor="#F9F0F3" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_578_26343"
          x1="411.847"
          y1="145.809"
          x2="411.847"
          y2="168.301"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#ECC3CE" />
          <Stop offset="0.7908" stopColor="#F7E6EB" />
          <Stop offset="1" stopColor="#F9F0F3" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_578_26343"
          x1="362.926"
          y1="50.0473"
          x2="362.926"
          y2="88.3805"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#ECC3CE" />
          <Stop offset="0.7908" stopColor="#F7E6EB" />
          <Stop offset="1" stopColor="#F9F0F3" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default RegisterCloud;
