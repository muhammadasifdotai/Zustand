import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import useCartStore from '../zustand/store/cartStore';
import {TouchableOpacity} from 'react-native';
import {Text} from 'react-native-svg';
import { SVG } from '../assets';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  const {items} = useCartStore();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => <SVG.Home color={color} />
        }}
      />
      <Tab.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => <SVG.Home color={color} />
          }}
      />
    </Tab.Navigator>
  );
}
