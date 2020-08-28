import React from "react";

import { View, ActivityIndicator, StyleSheet } from "react-native";

export default ({ size }) => {
  return (
    <View>
      <ActivityIndicator size={size || "large"} />
    </View>
  );
};

const style = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
