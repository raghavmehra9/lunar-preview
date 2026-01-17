import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { scale } from "@/utils/helpers/sizeMatters";
import Stars from "@/assets/svg/frequency/Stars";

type CardProps = {
  bullet?: boolean;
  data: string | string[];
  cardTitle: string;
};

const Card: React.FC<CardProps> = ({ bullet = false, cardTitle, data }) => {
  return (
    <View style={styles.cardContainer} className="bg-orange-snow">
      <View className="flex-row items-center" style={styles.cardHeader}>
        <Stars />
        <Text
          className="text-purple-plum font-Avenir-heavy"
          style={styles.fontSize_15}
        >
          {cardTitle}
        </Text>
      </View>
      {Array.isArray(data) && data.length > 0 ? (
        data.map((text, index) => (
          <View key={index} className="flex-row">
            <View style={{ flex: 0.075 }}>
              {bullet && (
                <View
                  className="bg-purple-frenchLilac"
                  style={styles.bullets}
                />
              )}
            </View>
            <View style={{ flex: 0.925 }}>
              <CardText text={text} />
            </View>
          </View>
        ))
      ) : (
        <CardText
          text={typeof data === "string" ? data : "No data available"}
        />
      )}
    </View>
  );
};

const CardText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Text
      className="text-purple-frenchLilac font-Avenir-regular"
      style={styles.fontSize_15}
    >
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  bullets: {
    width: scale(5),
    height: scale(5),
    borderRadius: scale(20),
    margin: scale(8),
  },
  cardContainer: {
    padding: scale(10),
    gap: scale(5),
    borderRadius: scale(10),
  },
  cardHeader: {
    gap: scale(5),
  },
  fontSize_15: {
    fontSize: scale(15),
  },
});

export default Card;
