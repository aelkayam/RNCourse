import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredTaskText, setEnteredTaskText] = useState("");
  const [taskList, setTaskList] = useState([]);

  function taskInputHandler(enteredText) {
    setEnteredTaskText(enteredText);
  }

  function addTaskHandler() {
    setTaskList((currentTaskList) => [
      ...currentTaskList,
      { text: enteredTaskText, key: Math.random().toString() },
    ]);
    console.log(taskList);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter new task"
          onChangeText={taskInputHandler}
        />
        <Button title="Add Task" onPress={addTaskHandler} />
      </View>
      <View style={styles.tasksContainer}>
        <FlatList
          data={taskList}
          renderItem={(itemData) => {
            return (
              <View style={styles.taskItem}>
                <Text style={styles.taskText}>{itemData.item.text}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
  },

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
  tasksContainer: {
    flex: 5,
  },

  taskItem: {
    margin: 6,
    padding: 6,
    borderRadius: 4,
    backgroundColor: "mediumpurple",
  },

  taskText: {
    color: "white",
  },
});
