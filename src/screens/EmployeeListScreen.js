import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default class EmployeeListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Add Employee"
          onPress={() => this.props.navigation.navigate("Add Employee")}
        />
        <Text>Sarah</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
});
