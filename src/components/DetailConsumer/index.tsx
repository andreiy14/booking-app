import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import RadioButtonGroup from "../RadioButtonGroup";
import GuestWrapper from "../GuestWrapper";
import { useNavigation } from "@react-navigation/native";
import { Guest, GuestState, RootStackParamList } from "../../../types";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
type Props = {};

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Form"
>;
const screenHeight = Dimensions.get("window").height;
const DetailConsumer = (props: Props) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const listData = useSelector((state: RootState) => state.guests);

  const options: { label: string; value: string }[] = [
    { label: "Saya memesan untuk sendiri", value: "self" },
    { label: "Saya memesan untuk orang lain", value: "others" },
  ];

  const handleChange = (newValue: string) => {
    setSelectedValue(newValue);
  };

  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const handleNavigateToForm = () => {
    navigation.navigate("Form", { data: "Some data to pass" });
  };

  return (
    <View style={styles.wrapperCard}>
      <Text style={styles.title}>Detail Pemesan</Text>
      <View style={styles.wrapperTypeRoom}>
        <View style={styles.wrapperLeftConsumer}>
          <Text style={styles.title}>Tn. React native</Text>
          <Text style={styles.caption}>reactnative@gmail.com</Text>
          <Text style={styles.caption}>+62 99878 9989 899</Text>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.buttonText}>Ubah</Text>
        </TouchableOpacity>
      </View>
      <RadioButtonGroup
        options={options}
        selectedValue={selectedValue}
        onChange={handleChange}
      />

      <Text style={styles.title}>Data Tamu</Text>
      {listData.guests.map((item: Guest) => (
        <GuestWrapper key={item.id} name={item.name} />
      ))}

      <View style={styles.guestSection}>
        <TouchableOpacity onPress={handleNavigateToForm}>
          <Text style={styles.buttonText}>Ubah Data Tamu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperCard: {
    backgroundColor: "white",
    borderBottomColor: "#D4D4D4",
    borderBottomWidth: 1,
    padding: 12,
    paddingTop: 16,
    gap: 14,
    height: screenHeight,
  },
  wrapperTypeRoom: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D4D4D4",
    flexDirection: "row",
    padding: 8,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6,
  },
  title: {
    fontWeight: "500",
  },
  caption: {
    fontWeight: "600",
    opacity: 0.5,
  },
  wrapperLeftConsumer: {
    gap: 5,
  },
  buttonText: {
    color: "#396ff7",
    fontSize: 16,
    textDecorationLine: "underline",
  },
  guestSection: {
    alignItems: "flex-end",
    marginTop: 3,
  },
});
export default DetailConsumer;
