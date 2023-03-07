import { useState } from "react";
import TaskItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";

import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [taskList, setTaskList] = useState([]);

  function startAddTasksHandler() {
    setModalIsVisible(true);
  }

  function endAddTaskHandler() {
    setModalIsVisible(false);
  }

  function addTaskHandler(enteredTaskText) {
    setTaskList((currentTaskList) => [
      ...currentTaskList,
      { text: enteredTaskText, key: Math.random().toString() },
    ]);
    endAddTaskHandler();
  }

  function deleteTaskHandler(id) {
    setTaskList((currentTaskList) => {
      return currentTaskList.filter((item) => item.key !== id);
    });
  }

  return (
    <>
      <StatusBar style="atuo" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Task"
          color="#4F1388"
          onPress={startAddTasksHandler}
        ></Button>
        <TaskInput
          onAddTask={addTaskHandler}
          onCancel={endAddTaskHandler}
          visible={modalIsVisible}
        />
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
    </>
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
    marginTop: 24,
  },
});
