import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import firebase from "firebase";
import Spinner from "./Spinner";
import { connect } from "react-redux";

import {
  emailChangeAction,
  passwordChangeAction,
  loginUser,
} from "../reudx/actions/authAction";

class Form extends React.Component {
  state = {
    email: "",
    password: "",
    isLoading: false,
  };

  onEmailChange = (text) => {
    this.props.emailChangeAction(text);
  };
  onPasswordChange = (text) => {
    this.props.passwordChangeAction(text);
  };
  onLogin = () => {
    this.props.loginUser({
      email: this.props.email,
      password: this.props.password,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headingContainer}>Manager</Text>
        <View style={styles.formContainer}>
          <Text style={styles.textContainer}>Email ID</Text>
          <TextInput
            placeholder="abc@domain.com"
            style={styles.inputContainer}
            onChangeText={(email) => this.onEmailChange(email)}
            keyboardType="email-address"
            value={this.props.email}
          />
          <Text style={styles.textContainer}>Password</Text>
          <TextInput
            placeholder="password"
            style={styles.inputContainer}
            onChangeText={(password) => this.onPasswordChange(password)}
            value={this.props.password}
            secureTextEntry
          />
          {this.state.isLoading ? (
            <Spinner size="small" />
          ) : (
            <View style={styles.buttonContainer}>
              <Button title="Login" onPress={() => this.onLogin()} />
            </View>
          )}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
  },
  formContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    margin: 10,
  },
  headingContainer: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "grey",
  },
  textContainer: {
    fontSize: 20,
  },
  inputContainer: {
    borderWidth: 1.5,
    height: 30,
    paddingLeft: 10,
    borderColor: "grey",
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    marginBottom: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
  };
};

export default connect(mapStateToProps, {
  emailChangeAction,
  passwordChangeAction,
  loginUser,
})(Form);
