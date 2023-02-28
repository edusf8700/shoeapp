import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons ,Feather } from '@expo/vector-icons';
import { useTheme } from 'native-base';

import { Home } from '../screens/Home';
import { Cart } from '../screens/Cart';
import { Details } from '../screens/Details';

const { Navigator, Screen } = createBottomTabNavigator();


export function AppRoutes() {
  const { colors, sizes } = useTheme();

  return (
    <Navigator 
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.green[500],
        tabBarInactiveTintColor: colors.gray[300],
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.gray[800],
          borderTopWidth: 0
        },
      }}
    >
      <Screen 
        name="Home" 
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-home-outline" color={color} size={sizes[6]} />
          )
        }} 
      />
      <Screen 
        name="Cart" 
        component={Cart} 
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="shopping-bag" color={color} size={sizes[6]} />
          )
        }} 
      />
      <Screen 
        name="Details" 
        component={Details} 
        options={{
          tabBarButton: () => null,
        }}
      />
    </Navigator>
  );
}