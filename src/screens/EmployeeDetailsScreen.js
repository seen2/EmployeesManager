import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default ({ route, navigation }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{route.params.title.name}</Text>
      <Text>Phone: {route.params.title.phone}</Text>
      <Text>Shift: {route.params.title.shift}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 10,
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
});
