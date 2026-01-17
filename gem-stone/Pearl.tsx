import Svg, {
  Circle,
  ClipPath,
  Defs,
  FeBlend,
  FeFlood,
  FeGaussianBlur,
  Filter,
  G,
  Mask,
  Path,
  Rect,
} from "react-native-svg";
import { IconDimension } from "../IconTypes";
import { scale } from "@/utils/helpers/sizeMatters";

const Pearl = ({ width = scale(397), height = scale(397) }: IconDimension) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 62 62" fill="none">
      <G clip-path="url(#clip0_1693_5105)">
        <Mask
          id="mask0_1693_5105"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="62"
          height="62"
        >
          <Path
            d="M62 31C62 13.8792 48.1208 0 31 0C13.8792 0 0 13.8792 0 31C0 48.1208 13.8792 62 31 62C48.1208 62 62 48.1208 62 31Z"
            fill="white"
          />
        </Mask>
        <G mask="url(#mask0_1693_5105)">
          <Path
            d="M31 62C48.1208 62 62 48.1208 62 31C62 13.8792 48.1208 0 31 0C13.8792 0 0 13.8792 0 31C0 48.1208 13.8792 62 31 62Z"
            fill="#DBC7BC"
          />
          <G filter="url(#filter0_f_1693_5105)">
            <Path
              d="M55.4408 27.152C55.4408 27.152 55.4408 34.2015 31.078 34.2015C13.2256 34.2015 8.49239 29.5014 7.3565 27.7768C7.0977 27.3837 7.0228 26.9132 7.04288 26.4431C7.47421 16.3474 17.0398 5.15369 31.078 5.15369C45.4458 5.15369 55.4408 16.879 55.4408 27.152Z"
              fill="#AFADB2"
            />
          </G>
          <G filter="url(#filter1_f_1693_5105)">
            <Path
              d="M5.99486 49.0876C3.68815 45.6473 7.49301 42.7336 11.2584 44.4595C28.8333 52.5148 44.4765 48.5498 60.9068 37.9496C60.9068 37.9496 56.1436 61.3721 30.8438 61.3721C17.3807 61.3721 9.97633 55.0259 5.99486 49.0876Z"
              fill="#ECE6D9"
            />
          </G>
          <G filter="url(#filter2_f_1693_5105)">
            <Path
              d="M4.45093 46.4609C8.97902 58.9175 41.1898 67.2947 56.1436 48.4912C56.1436 48.4912 47.3098 62.7031 29.7507 61.8438C12.1916 60.9847 4.45093 46.4609 4.45093 46.4609Z"
              fill="#CA9D97"
              fillOpacity="0.12"
            />
          </G>
          <G filter="url(#filter3_f_1693_5105)">
            <Path
              d="M41.5317 28.9976C41.7343 30.7857 40.6768 32.4686 38.9594 33.0063C33.1433 34.8278 25.6411 34.6413 20.7708 31.9352C20.7708 31.9352 23.4158 15.6171 30.8063 15.6171C37.2698 15.6171 40.7582 22.1679 41.5317 28.9976Z"
              fill="#82837D"
            />
          </G>
          <G filter="url(#filter4_f_1693_5105)">
            <Mask
              id="mask1_1693_5105"
              style={{ maskType: "luminance" }}
              maskUnits="userSpaceOnUse"
              x="7"
              y="5"
              width="49"
              height="30"
            >
              <Path
                d="M55.4408 27.152C55.4408 27.152 55.4408 34.2015 31.078 34.2015C13.2256 34.2015 8.49239 29.5014 7.3565 27.7768C7.0977 27.3837 7.0228 26.9132 7.04288 26.4431C7.47421 16.3474 17.0398 5.15369 31.078 5.15369C45.4458 5.15369 55.4408 16.879 55.4408 27.152Z"
                fill="white"
              />
            </Mask>
            <G mask="url(#mask1_1693_5105)">
              <Path
                d="M55.4409 27.152C54.8162 27.152 54.8162 27.1509 54.8162 27.1499C54.8162 27.1496 54.8162 27.1485 54.8162 27.1481C54.8162 27.1468 54.8162 27.1457 54.8162 27.1446C54.8162 27.1427 54.8164 27.141 54.8164 27.1399C54.8164 27.1374 54.8166 27.1367 54.8164 27.1374C54.8164 27.1388 54.8159 27.1463 54.8144 27.1596C54.8114 27.1862 54.8041 27.2357 54.7869 27.3052C54.7527 27.4434 54.6788 27.6639 54.5189 27.9416C54.2009 28.4938 53.5252 29.3012 52.0826 30.1361C49.1788 31.8166 43.2197 33.5768 31.0782 33.5768V34.8262C43.2994 34.8262 49.5217 33.0616 52.7086 31.2174C54.3113 30.2898 55.1583 29.3349 55.6016 28.5652C55.8223 28.1819 55.9388 27.8518 55.9999 27.6045C56.0303 27.4812 56.0467 27.3793 56.0556 27.3025C56.06 27.2643 56.0625 27.2322 56.0639 27.2069C56.0647 27.1943 56.065 27.1834 56.0653 27.1741C56.0655 27.1696 56.0655 27.1654 56.0656 27.1616C56.0656 27.1598 56.0656 27.1581 56.0656 27.1565C56.0656 27.1557 56.0656 27.1545 56.0656 27.1541C56.0656 27.1531 56.0656 27.152 55.4409 27.152ZM31.0782 33.5768C13.3082 33.5768 8.84272 28.8975 7.87837 27.4332L6.83495 28.1204C8.14234 30.1055 13.1432 34.8262 31.0782 34.8262V33.5768ZM7.66716 26.4697C8.08442 16.7032 17.3796 5.77836 31.0782 5.77836V4.52899C16.7001 4.52899 6.86431 15.9915 6.41893 26.4164L7.66716 26.4697ZM31.0782 5.77836C45.1119 5.77836 54.8162 17.2349 54.8162 27.152H56.0656C56.0656 16.5231 45.78 4.52899 31.0782 4.52899V5.77836ZM7.87837 27.4332C7.71704 27.1882 7.65032 26.8637 7.66716 26.4697L6.41893 26.4164C6.39558 26.9627 6.47865 27.5794 6.83495 28.1204L7.87837 27.4332ZM55.4409 27.152C56.0656 27.152 56.0656 27.152 56.0656 27.152C55.4409 27.152 54.8162 27.152 54.8162 27.152H56.0656C56.0656 27.152 55.4409 27.152 54.8162 27.152C54.8162 27.152 54.8162 27.152 55.4409 27.152Z"
                fill="#CA9D97"
              />
            </G>
          </G>
          <G filter="url(#filter5_f_1693_5105)">
            <Path
              d="M47.1138 11.5512C52.376 16.6559 46.6866 23.2489 39.3553 23.2489H22.645C15.3137 23.2489 9.57368 16.6454 14.8026 11.5066C18.5878 7.7867 24.1528 5.15369 30.8606 5.15369C37.5953 5.15369 43.2546 7.80777 47.1138 11.5512Z"
              fill="#FFFFFD"
            />
          </G>
        </G>
      </G>
      <Defs>
        <Filter
          id="filter0_f_1693_5105"
          x="0.792944"
          y="-1.09316"
          width="60.8946"
          height="41.5416"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <FeFlood floodOpacity="0" result="BackgroundImageFix" />
          <FeBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <FeGaussianBlur
            stdDeviation="3.12343"
            result="effect1_foregroundBlur_1693_5105"
          />
        </Filter>
        <Filter
          id="filter1_f_1693_5105"
          x="-0.953638"
          y="31.7028"
          width="68.1072"
          height="35.9161"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <FeFlood floodOpacity="0" result="BackgroundImageFix" />
          <FeBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <FeGaussianBlur
            stdDeviation="3.12343"
            result="effect1_foregroundBlur_1693_5105"
          />
        </Filter>
        <Filter
          id="filter2_f_1693_5105"
          x="3.20156"
          y="45.2116"
          width="54.1914"
          height="17.9191"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <FeFlood floodOpacity="0" result="BackgroundImageFix" />
          <FeBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <FeGaussianBlur
            stdDeviation="0.624685"
            result="effect1_foregroundBlur_1693_5105"
          />
        </Filter>
        <Filter
          id="filter3_f_1693_5105"
          x="15.1486"
          y="9.99496"
          width="32.03"
          height="29.8287"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <FeFlood floodOpacity="0" result="BackgroundImageFix" />
          <FeBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <FeGaussianBlur
            stdDeviation="2.81108"
            result="effect1_foregroundBlur_1693_5105"
          />
        </Filter>
        <Filter
          id="filter4_f_1693_5105"
          x="2.97934"
          y="1.09323"
          width="56.5218"
          height="37.1688"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <FeFlood floodOpacity="0" result="BackgroundImageFix" />
          <FeBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <FeGaussianBlur
            stdDeviation="2.03023"
            result="effect1_foregroundBlur_1693_5105"
          />
        </Filter>
        <Filter
          id="filter5_f_1693_5105"
          x="6.53464"
          y="-1.09316"
          width="48.8765"
          height="30.589"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <FeFlood floodOpacity="0" result="BackgroundImageFix" />
          <FeBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <FeGaussianBlur
            stdDeviation="3.12343"
            result="effect1_foregroundBlur_1693_5105"
          />
        </Filter>
        <ClipPath id="clip0_1693_5105">
          <Rect width="62" height="62" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Pearl;
