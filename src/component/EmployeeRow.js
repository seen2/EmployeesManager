import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default ({ title }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title.name}</Text>
      <Text>Phone:{title.phone}</Text>
      <Text>Shift: {title.shift}</Text>
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
