import React from "react";
import { Button, YellowBox } from "react-native";
import { Provider } from "react-redux";
import firebase from "firebase";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import store from "./src/reudx/store";
import LoginFormScreen from "./src/screens/LoginScreen";
import EmployeeListScreen from "./src/screens/EmployeeListScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import AddEmployeeScreen from "./src/screens/AddEmployeeScreen";

const Stack = createStackNavigator();
YellowBox.ignoreWarnings(["Setting a timer"]);

export default class App extends React.Component {
  state = {
    user: null,
  };

  componentDidMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyBc36Rj9aJAMvEQ4W6j2aV5_gTLC23yf9A",
      authDomain: "employeesmanager-eca23.firebaseapp.com",
      databaseURL: "https://employeesmanager-eca23.firebaseio.com",
      projectId: "employeesmanager-eca23",
      storageBucket: "employeesmanager-eca23.appspot.com",
      messagingSenderId: "1041033621397",
      appId: "1:1041033621397:web:529f475a87830344d5509c",
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user: user });
    });
  }

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            {!this.state.user ? (
              <>
                <Stack.Screen name="Login" component={LoginFormScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
              </>
            ) : (
              <>
                <Stack.Screen
                  name="EmployeeList"
                  component={EmployeeListScreen}
                  options={({ route }) => {
                    return {
                      headerRight: () => (
                        <Button
                          title="Log Out"
                          onPress={() => {
                            firebase.auth().signOut();
                          }}
                        />
                      ),
                    };
                  }}
                />
                <Stack.Screen
                  name="Add Employee"
                  component={AddEmployeeScreen}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

/*
I'm being lazy here, so dont't be smart bitch!!!!

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBc36Rj9aJAMvEQ4W6j2aV5_gTLC23yf9A",
    authDomain: "employeesmanager-eca23.firebaseapp.com",
    databaseURL: "https://employeesmanager-eca23.firebaseio.com",
    projectId: "employeesmanager-eca23",
    storageBucket: "employeesmanager-eca23.appspot.com",
    messagingSenderId: "1041033621397",
    appId: "1:1041033621397:web:529f475a87830344d5509c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>

*/
