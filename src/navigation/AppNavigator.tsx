import * as React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import store from "../store/store";
import PaymentDetails from "./screens/PaymentDetails";
import FormListGuest from "./screens/FormListGuest";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#3b38f2" },
            headerTintColor: "white",
            headerLeftLabelVisible: false,
          }}
        >
          <Stack.Screen name="Payment Details" component={PaymentDetails} />
          <Stack.Screen
            options={{ title: "Tambah Data Tamu" }}
            name="Form"
            component={FormListGuest}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default AppNavigator;
