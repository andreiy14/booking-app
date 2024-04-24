import { StyleSheet, View } from "react-native";
import {
  StepApprover,
  CardDetailOrder,
  DetailConsumer,
} from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { useEffect } from "react";
import { fetchHotels } from "../../../features/hotelSlice";
import { ScrollView } from "react-native-gesture-handler";

export default function PaymentDetails() {
  const dispatch: AppDispatch = useDispatch<AppDispatch>();

  const dataHotel = useSelector((state: RootState) => state.hotel);
  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <StepApprover />
        <CardDetailOrder data={dataHotel.hotels} />
        <DetailConsumer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
