import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { connect } from "react-redux";

import {
  emailChangeAction,
  passwordChangeAction,
  createAccount,
} from "../reudx/actions/authAction";
import Spinner from "../component/Spinner";

class Form extends React.Component {
  state = { err: "" };

  onEmailChange = (text) => {
    this.props.emailChangeAction(text);
  };
  onPasswordChange = (text) => {
    this.props.passwordChangeAction(text);
  };

  onSignUp = () => {
    this.props.createAccount({
      email: this.props.email,
      password: this.props.password,
    });
    if (this.props.user) {
      this.props.navigation.navigate("Login");
      console.log(this.props.user);
    } else this.setState({ err: this.props.err });
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

          {this.props.loading ? (
            <Spinner size="small" />
          ) : (
            <View style={styles.buttonContainer}>
              <Button title="Sign Up" onPress={() => this.onSignUp()} />
            </View>
          )}
          <Text style={styles.errContainer}>
            {this.state.err ? "Process Denied" : null}
          </Text>
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
  errContainer: {
    fontSize: 20,
    color: "red",
    textAlign: "center",
    fontWeight: "bold",
  },
});

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    err: state.auth.err,
    user: state.auth.user,
    loading: state.auth.loading,
  };
};

export default connect(mapStateToProps, {
  emailChangeAction,
  passwordChangeAction,
  createAccount,
})(Form);
