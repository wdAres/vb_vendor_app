import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import NaviCon from "./NaviCon";
import Toast from "react-native-toast-message";
import { AuthProvider } from "./context/AuthContext";
import { Provider } from "react-redux";
import { reduxStore } from "./redux/reduxStore";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  console.log(reduxStore)

  return (
    <>
      <AuthProvider>
        <Provider store={reduxStore}>
          <IconRegistry icons={[MaterialIconsPack]} />
          <ApplicationProvider {...eva} theme={eva.light}>
            <NaviCon />
          </ApplicationProvider>
        </Provider>
        <Toast />
      </AuthProvider>
    </>
  );
};
export default App;
