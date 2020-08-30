import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default (props) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        props.navigation.navigate("Employee Details", { title: props.title })
      }
    >
      <Text style={styles.title}>{props.title.name}</Text>
    </TouchableOpacity>
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
