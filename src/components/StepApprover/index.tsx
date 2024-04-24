import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {};

const StepApprover = (props: Props) => {
  return (
    <View style={styles.wrapperStep}>
      <View style={styles.wrapperScroller}>
        <View style={[styles.circle, styles.circleCompleted]}>
          <Text style={styles.textCircle}>1</Text>
        </View>
        <Text style={styles.text}>Detail Pesanan</Text>
        <View style={styles.dividerBlue} />
        <View style={[styles.circle, styles.circleNotCompleted]}>
          <Text>2</Text>
        </View>
        <Text style={styles.textDisable}>Pembayaran</Text>
      </View>
    </View>
  );
};

export default StepApprover;

const styles = StyleSheet.create({
  wrapperStep: {
    backgroundColor: "white",
    height: 70,
    borderBottomColor : "#D4D4D4",
    borderBottomWidth : 1
  },
  wrapperScroller: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginLeft: "auto",
    paddingRight: 8,
  },
  text: {
    fontWeight: "600",
  },
  textDisable: {
    opacity: 0.3,
    fontWeight: "600",
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    color: "white",
  },
  textCircle: {
    color: "white",
    fontWeight: "600",
  },
  circleNotCompleted: {
    backgroundColor: "gray",
    opacity: 0.3,
  },

  circleCompleted: {
    backgroundColor: "#3b38f2",
  },
  dividerGray: {
    width: 30,
    height: 2,
    backgroundColor: "gray",
    alignSelf: "center",
    marginHorizontal: 5,
  },
  dividerBlue: {
    width: 30,
    height: 2,
    backgroundColor: "#3b38f2",
    alignSelf: "center",
    marginHorizontal: 5,
  },
});
