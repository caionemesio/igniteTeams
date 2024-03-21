import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { View } from "react-native";
import myTheme from "src/theme";

export default function Routes() {

  return (
    <View style={{ flex: 1, backgroundColor: myTheme.COLORS.GRAY_600 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View >
  );
}