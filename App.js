import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import IndexScreen from "./src/screens/IndexScreen";
import { TestProvider } from "./src/context/TestContext";

const navigator = createSwitchNavigator(
  { Index: IndexScreen },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: { title: "Citizen Test" }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <TestProvider>
      <App />
    </TestProvider>
  );
};
