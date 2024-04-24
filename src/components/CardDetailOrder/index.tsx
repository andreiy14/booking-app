import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ChosenHotel } from "../../../types";
import moment from "moment";

type Props = {
  data: ChosenHotel | null;
};
const CardDetailOrder = ({ data }: Props) => {
  return (
    <View style={styles.wrapperCard}>
      <Text style={styles.title}> Detail Pesanan</Text>

      <View style={styles.wrapperTypeRoom}>
        <Image
        style={styles.image}
          source={{
            uri: data?.data.get_chosen_hotel.chosen_hotel_detail.images[1].thumbnail,
          }}
        />

        <View>
          <Text style={styles.hotelName}>
            {data?.data.get_chosen_hotel.chosen_hotel_detail.hotel_name}
          </Text>
          <Text style={styles.caption}>
            {data?.data.get_chosen_hotel.chosen_hotel_room.room_name}
          </Text>
          <Text style={styles.caption}>
            {
              data?.data.get_chosen_hotel.chosen_hotel_room
                .hotel_room_type_selected
            }
          </Text>
        </View>
      </View>

      <View style={styles.wrapperCheckInOut}>
        <View style={styles.itemsCheckInOut}>
          <Text style={styles.title}>Check-in</Text>
          <Text style={styles.title}>Check-out</Text>
        </View>
        <View style={styles.itemsCheckInOut}>
          <Text style={styles.caption}>
            {" "}
            {moment(
              data?.data.get_chosen_hotel.chosen_hotel_params.check_in
            ).format("DD MMMM YYYY")}
          </Text>
          <Text style={styles.caption}>
            {" "}
            {moment(
              data?.data.get_chosen_hotel.chosen_hotel_params.check_out
            ).format("DD MMMM YYYY")}
          </Text>
        </View>
      </View>
      <View style={styles.wrapperRefundSection}>
        <Image
          style={styles.imgRepeat}
          source={require("../../../assets/repeat.png")}
        />
        <Text style={styles.refundText}> Dapat refund jika dibatalkan</Text>
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
    gap: 12,
  },
  title: {
    fontWeight: "500",
  },
  wrapperTypeRoom: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D4D4D4",
    flexDirection: "row",
    gap: 12,
    padding: 8,
  },
  hotelName: {
    color: "#4c92f5",
    fontWeight: "600",
  },
  caption: {
    fontWeight: "600",
    opacity: 0.5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 4,
    backgroundColor: "red",
  },
  wrapperCheckInOut: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 8,
  },
  itemsCheckInOut: {
    gap: 6,
  },
  wrapperRefundSection: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 8,
  },
  refundText: {
    color: "#f29530",
    fontWeight: "500",
  },
  imgRepeat: {
    height: 12,
    width: 12,
  },
});
export default CardDetailOrder;
