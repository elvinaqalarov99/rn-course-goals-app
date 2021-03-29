import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoals, setEnteredGoals] = useState("");

  const goalHandler = () => {
    props.addGoalHandler(enteredGoals);
    setEnteredGoals("");
  };

  return (
    <Modal
      visible={props.visible}
      animationType="slide"
      transparent={false}
      onRequestClose={() => props.closeModal()}
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={(text) => setEnteredGoals(text)}
          value={enteredGoals}
        />
        <View style={styles.button}>
          <Button title="Add" onPress={goalHandler} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 15,
  },
  textInput: {
    // flex: 1,
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 4,
    marginBottom: 10,
  },
  button: {
    width: "80%",
  },
});

export default GoalInput;
