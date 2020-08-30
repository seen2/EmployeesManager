import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default ({ route, navigation }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{route.params.title.name}</Text>
      <Text>Phone: {route.params.title.phone}</Text>
      <Text>Shift: {route.params.title.shift}</Text>
      <Button
        title="Edit"
        onPress={() => navigation.navigate("Add Employee")}
      />
      <Button title="Delete" color="red" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
  },
});
