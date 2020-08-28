import React from "react";
import { Provider } from "react-redux";
import firebase from "firebase";

import store from "./src/reudx/store";
import Form from "./src/component/Form";

export default class App extends React.Component {
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
  }

  render() {
    return (
      <Provider store={store}>
        <Form />
      </Provider>
    );
  }
}

/*
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
