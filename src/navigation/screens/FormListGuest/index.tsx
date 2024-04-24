import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SelectDropDown } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { Guest } from "../../../../types";
import { saveGuest } from "../../../features/guestSlice";
import { fetchHotels } from "../../../features/hotelSlice";
import { useNavigation } from "@react-navigation/native";

const ScreenHeight = Dimensions.get("window").height;
const AddRemoveGuests = () => {
  const dispatch: AppDispatch = useDispatch<AppDispatch>();
  const listData = useSelector((state: RootState) => state.guests);
  const navigation = useNavigation();
  const [guests, setGuests] = useState<Guest[]>(listData.guests);

  const addGuest = () => {
    setGuests((prevGuests) => [
      ...prevGuests,
      {
        id: prevGuests.length + 1,
        name: "",
        gender: "Mr",
      },
    ]);
  };

  const removeGuest = (guestId: number) => {
    setGuests((prevGuests) =>
      prevGuests.filter((guest) => guest.id !== guestId)
    );
  };

  const handleChange = (key: string, value: string, index: number) => {
    setGuests((prev) => {
      const updatedGuests = [...prev];

      updatedGuests[index] = {
        ...updatedGuests[index],
        [key]: value,
      };

      return updatedGuests;
    });
  };

  const handleGoBack = () => {
    navigation.goBack();
    dispatch(saveGuest({ guests: guests }));
  };

  const renderGuestItem = ({ item, index }: { item: Guest; index: number }) => (
    <View style={styles.guestItem}>
      <View style={styles.containerInput}>
        <SelectDropDown
          value={item.gender}
          handleChangeData={(value: string) => {
            handleChange("gender", value, index);
          }}
        />
      </View>
      <TextInput
        style={[styles.containerInput, { flex: 1 }]}
        onChangeText={(value) => handleChange("name", value, index)}
        value={item.name}
      />
      <TouchableOpacity onPress={() => removeGuest(item.id)}>
        <Image
          style={styles.image}
          source={require("../../../../assets/delete.png")}
        />
      </TouchableOpacity>
    </View>
  );

  const renderButtonAddGuest = () => {
    return (
      <View style={styles.wrapperButtonAdd}>
        <TouchableOpacity onPress={addGuest}>
          <Text style={styles.buttonText}>+ Tambah Data Tamu</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: ScreenHeight * 0.7 }}>
        <FlatList
          ListFooterComponent={renderButtonAddGuest}
          data={guests}
          renderItem={renderGuestItem}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled
        />
      </View>

      <TouchableOpacity onPress={handleGoBack}>
        <View style={{ paddingHorizontal: 30, marginTop: 12 }}>
          <View style={styles.saveButton}>
            <Text>Simpan</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  guestItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 5,
    gap: 8,
  },
  containerInput: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D4D4D4",
    padding: 8,
    height: 48,
    justifyContent: "center",
  },
  wrapperButtonAdd: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    color: "#f29530",
    fontSize: 16,
    textDecorationLine: "underline",
  },
  image: {
    width: 30,
    height: 30,
  },
  saveButton: {
    backgroundColor: "#f29530",
    justifyContent: "center",
    alignItems: "center",
    height: 48,
    borderRadius: 12,
  },
});

export default AddRemoveGuests;
