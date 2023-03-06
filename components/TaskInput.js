import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function TaskInput(props) {
  const [enteredTaskText, setEnteredTaskText] = useState("");

  function taskInputHandler(enteredText) {
    setEnteredTaskText(enteredText);
  }

  function addTaskHandler() {
    if (enteredTaskText !== "") props.onAddTask(enteredTaskText);
    taskInputHandler("");
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter new task"
        onChangeText={taskInputHandler}
        value={enteredTaskText}
      />
      <Button title="Add Task" onPress={addTaskHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 18,
    borderBottomWidth: 2,
    borderColor: "#cccccc",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 12,
    padding: 8,
  },
});
