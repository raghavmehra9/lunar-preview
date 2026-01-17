import Svg, { Defs, LinearGradient, Path, Rect, Stop } from "react-native-svg";

import { IconDimension } from "../IconTypes";
import { scale } from "@/utils/helpers/sizeMatters";

const SubscriptionCard = ({
  width = scale(375),
  height = scale(110),
}: IconDimension) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 375 132" fill="none">
      <Rect
        width="375"
        height="131.428"
        rx="10"
        fill="url(#paint0_linear_612_563)"
      />
      <Path
        d="M125.954 95.207L127.724 98.444L130.961 100.214L127.724 101.984L125.954 105.221L124.184 101.984L120.947 100.214L124.184 98.444L125.954 95.207Z"
        fill="#E0AB70"
      />
      <Path
        d="M233.825 72.0527L233.946 73.6848L234.982 75.0703L233.252 75.0492L231.862 75.9121L231.74 74.28L230.705 72.8946L232.434 72.9157L233.825 72.0527Z"
        fill="#E0AB70"
      />
      <Path
        d="M158.101 30.0879L158.223 31.72L159.258 33.1054L157.529 33.0843L156.138 33.9473L156.017 32.3152L154.981 30.9297L156.711 30.9509L158.101 30.0879Z"
        fill="#E0AB70"
      />
      <Path
        d="M205.101 103.088L205.223 104.72L206.258 106.105L204.529 106.084L203.138 106.947L203.017 105.315L201.981 103.93L203.711 103.951L205.101 103.088Z"
        fill="#E0AB70"
      />
      <Path
        d="M133.447 24.207L134.331 25.8233L135.947 26.707L134.331 27.5908L133.447 29.207L132.564 27.5908L130.947 26.707L132.564 25.8233L133.447 24.207Z"
        fill="#E0AB70"
      />
      <Path
        d="M144.447 60.207L145.685 62.1462L147.947 63.207L145.685 64.2679L144.447 66.207L143.21 64.2679L140.947 63.207L143.21 62.1462L144.447 60.207Z"
        fill="white"
      />
      <Path
        d="M108.251 49.1268L108.597 52.4309L110.586 54.9275L107.438 55.4575L104.974 57.6857L104.628 54.3816L102.639 51.885L105.787 51.355L108.251 49.1268Z"
        fill="white"
      />
      <Path
        d="M163.995 85.8381L164.185 87.6584L165.281 89.0339L163.547 89.3258L162.189 90.5534L161.999 88.7331L160.903 87.3577L162.637 87.0657L163.995 85.8381Z"
        fill="white"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_612_563"
          x1="220.534"
          y1="15.8538"
          x2="130.926"
          y2="138.479"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#713385" />
          <Stop offset="1" stopColor="#3E1F48" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default SubscriptionCard;
