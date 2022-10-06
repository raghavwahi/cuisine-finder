import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import FatFree from "./src/screens/fat-free";
import Home from "./src/screens/home";
import Vegan from "./src/screens/vegan";
import store from "./store/store";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="fat-free" component={FatFree} />
          <Stack.Screen name="vegan" component={Vegan} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
