import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";

import { HomeScreen } from "./src/Components/HomeScreen";
import AddTransaction  from "./src/Components/AddTransaction";
import { store } from "./src/Reducers/transactionReducer";
import { NativeBaseProvider } from "native-base";

import { createStore } from "redux";
import transactionReducer from "./src/Reducers/transactionReducer";

const Stack = createStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: "Expense Tracker",
              }}
            />
            <Stack.Screen
              name="Add"
              component={AddTransaction}
              options={{
                title: "Add an Expense",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </NativeBaseProvider>
  );
}

export default App;
