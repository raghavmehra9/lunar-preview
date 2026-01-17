import {
  Defs,
  G,
  LinearGradient,
  Mask,
  Path,
  Stop,
  Svg,
} from "react-native-svg";

const Cloud = ({ width = 439, height = 132 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 439 132" fill="none">
      <Path
        opacity="0.6"
        d="M0 111.774C0 111.774 11.465 70.468 30.681 88.477C33.491 91.11 39.678 100.978 39.678 100.978C39.678 100.978 29.348 61.916 56.34 66.351C83.332 70.786 69.158 106.776 69.158 106.776C69.158 106.776 87.081 75.787 101.327 97.445C103.461 100.69 107.325 111.774 107.325 111.774H0Z"
        fill="url(#paint0_linear_3170_9723)"
      />
      <Path
        opacity="0.6"
        d="M385.479 131.299C385.479 131.299 391.114 111.003 400.555 119.852C401.936 121.146 404.975 125.995 404.975 125.995C404.975 125.995 399.9 106.801 413.163 108.981C426.426 111.16 419.461 128.844 419.461 128.844C419.461 128.844 428.267 113.617 435.268 124.259C436.317 125.853 438.215 131.3 438.215 131.3H385.479V131.299Z"
        fill="url(#paint1_linear_3170_9723)"
      />
      <Path
        opacity="0.6"
        d="M314.004 49.1026C314.004 49.1026 317.929 27.8306 335.591 30.9146C353.253 33.9986 352.412 49.1026 352.412 49.1026C352.412 49.1026 351.851 9.88756 371.476 13.2516C391.101 16.6156 387.456 51.3796 387.456 51.3796C387.456 51.3796 399.231 31.1936 411.847 51.3796L314.004 49.1026Z"
        fill="url(#paint2_linear_3170_9723)"
      />
      <Mask
        id="mask0_3170_9723"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="98"
        y="0"
        width="60"
        height="60"
      >
        <Path d="M157.913 0H98.5654V60H157.913V0Z" fill="white" />
      </Mask>
      <G mask="url(#mask0_3170_9723)">
        <Path
          d="M148.965 43.0792C136.067 48.2764 121.399 42.0338 116.202 29.1364C112.14 19.057 115.065 7.89605 122.694 1.01953C121.022 1.36877 119.358 1.86051 117.719 2.52116C102.762 8.5479 95.5225 25.5586 101.55 40.5152C107.576 55.4718 124.587 62.7109 139.544 56.6842C147.969 53.289 153.945 46.4082 156.48 38.3728C154.333 40.3221 151.812 41.932 148.965 43.0792Z"
          fill="white"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_3170_9723"
          x1="53.6628"
          y1="66.0005"
          x2="53.6628"
          y2="111.775"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#ECC3CE" />
          <Stop offset="0.7908" stopColor="#F7E6EB" />
          <Stop offset="1" stopColor="#F9F0F3" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_3170_9723"
          x1="411.847"
          y1="108.809"
          x2="411.847"
          y2="131.301"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#ECC3CE" />
          <Stop offset="0.7908" stopColor="#F7E6EB" />
          <Stop offset="1" stopColor="#F9F0F3" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_3170_9723"
          x1="362.926"
          y1="13.0473"
          x2="362.926"
          y2="51.3805"
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

export default Cloud;
