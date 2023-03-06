import { StyleSheet, View, Text, Pressable } from "react-native";

function TaskItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.taskItem}>
        <Text style={styles.taskText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    margin: 6,
    padding: 6,
    borderRadius: 4,
    backgroundColor: "blueviolet",
  },

  taskText: {
    color: "white",
  },
});

export default TaskItem;
