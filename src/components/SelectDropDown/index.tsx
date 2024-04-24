import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";

interface Country {
  label: string;
  value: string;
}

const countries: Country[] = [
  { label: "Mr", value: "Mr" },
  { label: "Ms", value: "Ms" },
];

interface Props {
  value: string;
  handleChangeData: Function;
}

const SelectDropDown = ({ value, handleChangeData }: Props) => {
  const [selectedCountry, setSelectedCountry] = useState<Country | undefined>(
    countries.find((item) => item.value === value)
  );

  const handleChange = (item: Country) => {
    setSelectedCountry(item);
    handleChangeData(item.value);
  };

  return (
    <Dropdown
      style={{ width: 50 }}
      containerStyle={{ width: 120 }}
      showsVerticalScrollIndicator
      placeholderStyle={{ color: "gray" }}
      selectedTextStyle={{ color: "black" }}
      placeholder="Mr"
      data={countries}
      labelField="label"
      valueField="value"
      value={selectedCountry}
      onChange={handleChange}
    />
  );
};

export default SelectDropDown;
