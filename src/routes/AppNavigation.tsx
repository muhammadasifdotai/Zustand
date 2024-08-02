import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./TabNavigation";
import useCartStore from "../zustand/store/cartStore";
import Modal from "../screens/Modal";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigation() {
    const {items} = useCartStore();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
          name="Home"
          component={TabNavigation} options={{headerShown: false}}/>
      <Stack.Screen
          name="Modal"
          component={Modal} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}