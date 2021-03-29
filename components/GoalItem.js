import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.goalList}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goalList: {
    padding: 8,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#ccc",
    marginBottom: 10,
  },
});

export default GoalItem;
