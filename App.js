import { useState } from "react";
import TaskItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";

import { StyleSheet, View, FlatList } from "react-native";

export default function App() {
  const [taskList, setTaskList] = useState([]);

  function addTaskHandler(enteredTaskText) {
    setTaskList((currentTaskList) => [
      ...currentTaskList,
      { text: enteredTaskText, key: Math.random().toString() },
    ]);
    console.log(taskList);
  }

  function deleteTaskHandler(id) {
    setTaskList((currentTaskList) => {
      return currentTaskList.filter((item) => item.key !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <TaskInput onAddTask={addTaskHandler} />
      <View style={styles.tasksContainer}>
        <FlatList
          data={taskList}
          renderItem={(itemData) => {
            return (
              <TaskItem
                text={itemData.item.text}
                id={itemData.item.key}
                onDeleteItem={deleteTaskHandler}
              />
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

  tasksContainer: {
    flex: 5,
  },
});
