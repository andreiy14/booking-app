import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

type Props = { name: string };

const GuestWrapper = ({ name }: Props) => {
  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.image}
        source={require("../../../assets/user.png")}
      />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D4D4D4",
    flexDirection: "row",
    padding: 4,
    alignItems: "center",
    paddingHorizontal : 16,
    gap : 14
  },
  image: {
    width: 20,
    height: 20,
  },
  text: {
    fontWeight: "500",
  },
});
export default GuestWrapper;
