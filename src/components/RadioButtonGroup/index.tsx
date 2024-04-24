import React, { useState } from "react";
import { View } from "react-native";

import RadioButton from "../RadioButton";
interface RadioButtonGroupProps {
  options: { label: string; value: string }[];
  selectedValue?: string | null;
  onChange?: (value: string) => void;
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  options,
  selectedValue,
  onChange,
}) => {
  const [selected, setSelected] = useState<string | null>(
    selectedValue || null
  );

  const handleRadioPress = (value: string) => {
    setSelected(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <View>
      {options.map((option) => (
        <RadioButton
          key={option.value}
          label={option.label}
          value={option.value}
          selected={selected === option.value}
          onPress={handleRadioPress}
        />
      ))}
    </View>
  );
};

export default RadioButtonGroup;
