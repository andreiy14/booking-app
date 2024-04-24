import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface RadioButtonProps {
  label: string;
  value: string;
  selected?: boolean;
  onPress?: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  value,
  selected = false,
  onPress,
}) => {
  const handlePress = () => {
    if (onPress) {
      onPress(value);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.radioButton}>
      <View style={styles.circle}>
        {selected && <View style={styles.selectedCircle} />}
      </View>
      <Text style={styles.radioButtonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  circle: {
    width: 23,
    height: 23,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#396ff7",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  selectedCircle: {
    width: 17,
    height: 17,
    borderRadius: 10,
    backgroundColor: "blue",
    position: "absolute",
  },
  radioButtonText: {
    marginLeft: 10,
  },
});

export default RadioButton;
