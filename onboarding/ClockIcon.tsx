import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

const ClockIcon = () => {
  return (
    <Svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <G clip-path="url(#clip0_578_26501)">
        <Path
          d="M12.9873 0.5C6.0946 0.5 0.487305 6.10729 0.487305 13C0.487305 19.8927 6.0946 25.5 12.9873 25.5C19.88 25.5 25.4873 19.8927 25.4873 13C25.4873 6.10729 19.88 0.5 12.9873 0.5ZM17.154 14.0417H12.9873C12.4123 14.0417 11.9456 13.576 11.9456 13V6.75C11.9456 6.17396 12.4123 5.70833 12.9873 5.70833C13.5623 5.70833 14.029 6.17396 14.029 6.75V11.9583H17.154C17.73 11.9583 18.1956 12.424 18.1956 13C18.1956 13.576 17.73 14.0417 17.154 14.0417Z"
          fill="#E889A1"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_578_26501">
          <Rect
            width="25"
            height="25"
            fill="white"
            transform="translate(0.487305 0.5)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default ClockIcon;
