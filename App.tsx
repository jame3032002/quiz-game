import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Game from "./src/screens/Game";
import LeaderBoard from "./src/screens/Leaderboard";

const Stack = createNativeStackNavigator();
export default function App() {
  const customTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white",
    },
  };

  return (
    <NavigationContainer theme={customTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="game"
          component={Game}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="leaderBoard"
          component={LeaderBoard}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
