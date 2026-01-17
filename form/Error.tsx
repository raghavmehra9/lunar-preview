import ErrorIcon from "@/assets/svg/sso/ErrorIcon";
import { SCREEN_WIDTH } from "@/constants/Spacing";
import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, Text, View, ViewStyle } from "react-native";

interface ErrorProps {
  error: string | undefined;
  style?: ViewStyle;
}

const Error = (props: ErrorProps) => {
  const { error, style } = props;
  if (!error) return;
  return (
    <View
      className="flex-row gap-2 pt-1"
      style={[style, styles.errorContainer]}
    >
      <ErrorIcon />
      <Text
        className="text-red-error font-Avenir-book"
        style={styles.errorFontStyle}
      >
        {error}
      </Text>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  errorFontStyle: {
    fontSize: scale(11),
  },
  errorContainer: {
    paddingHorizontal: scale(10),
    width: SCREEN_WIDTH - scale(40),
  },
});
