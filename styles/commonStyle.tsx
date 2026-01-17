import { SCREEN_WIDTH } from "@/constants/Spacing";
import { scale } from "@/utils/helpers/sizeMatters";

const commonStyles = {
  container: {
    flex: 1,
  },
  dynamicWidth: ({ padding = 20, extraStyles = {} } = {}) => ({
    width: SCREEN_WIDTH - scale(padding * 2),
    ...extraStyles,
  }),
  screenContainer: {
    paddingHorizontal: scale(20),
  },
};

export default commonStyles;
