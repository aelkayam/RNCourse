import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        {/* <Image source={require("../assets/images/task.png")} /> */}
        <TextInput
          style={styles.textInput}
          placeholder="Enter new task"
          onChangeText={taskInputHandler}
          value={enteredTaskText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Task" onPress={addTaskHandler} color="#2C47E2" />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.onCancel}
              color="#E22CC1"
            ></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "blueviolet",
  },

  image: {
    width: 100,
    height: 100,
  },

  textInput: {
    fontSize: 18,
    color: "#DEC3F7",
    borderColor: "#EEE1FB",
    backgroundColor: "#EEE1FB",
    color: "#140522",
    borderWidth: 1,
    borderRadius: 6,
    width: "100%",
    padding: 12,
  },

  buttonContainer: {
    marginTop: 24,
    flexDirection: "row",
  },

  button: {
    width: 100,
    marginHorizontal: 12,
  },
});
