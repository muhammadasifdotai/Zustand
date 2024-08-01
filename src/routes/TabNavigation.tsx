import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="TabOneScreen" component={TabOneScreen} />
        <Tab.Screen name="TabTwoScreen" component={TabTwoScreen} />
      </Tab.Navigator>
  );
}