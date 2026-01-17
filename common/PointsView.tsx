import { StyleSheet, Text, View } from "react-native";
import { Fragment } from "react";

type Props = {
  points: string[];
};

export const PointsView = ({ points }: Props) => {
  return (
    <Fragment>
      {points.map((point, index) => {
        return (
          <View className="flex-row items-start mb-5" key={index}>
            <View className="rounded-full size-2 bg-[#505050] mt-2 mr-2" />
            <Text className="font-Avenir-regular color=[#505050]">{point}</Text>
          </View>
        );
      })}
    </Fragment>
  );
};

export const PointsHeading = ({ heading }: { heading: string }) => {
  return (
    <Text className="font-Avenir-heavy color=[#505050] bg-[#FFF9F4] p-3 mb-4 text-center rounded-md">
      {heading}
    </Text>
  );
};

export const PointsContent = ({
  content,
  className,
}: {
  content: string;
  className?: string;
}) => {
  return (
    <Text className={`font-Avenir-regular color=[#505050] ${className}`}>
      {content}
    </Text>
  );
};
