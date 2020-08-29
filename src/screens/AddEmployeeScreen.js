import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import { connect } from "react-redux";

import {
  onNameChangeAction,
  onPhoneChangeAction,
  onShiftChangeAction,
} from "../reudx/actions/employeeAction";

class AddEmployeeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.props.name}
          onChangeText={(text) => this.props.onNameChangeAction(text)}
          style={styles.inputContainer}
          placeholder="Employee Name"
        />
        <TextInput
          value={this.props.phone}
          onChangeText={(text) => this.props.onPhoneChangeAction(text)}
          style={styles.inputContainer}
          placeholder="Phone Number"
          keyboardType="number-pad"
        />
        <TextInput
          value={this.props.shift}
          onChangeText={(text) => this.props.onShiftChangeAction(text)}
          style={styles.inputContainer}
          placeholder="Shift"
        />
        <Button title="Save" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  inputContainer: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    textAlign: "center",
  },
});

const mapStateToProps = (state) => ({
  name: state.employee.email,
  phone: state.employee.phone,
  shift: state.employee.shift,
});

export default connect(mapStateToProps, {
  onNameChangeAction,
  onPhoneChangeAction,
  onShiftChangeAction,
})(AddEmployeeScreen);
