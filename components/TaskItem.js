import { StyleSheet, View, Text, Pressable } from "react-native";

function TaskItem(props) {
  return (
    <View style={styles.taskItem}>
      <Pressable
        android_ripple={{ color: "#370d5e" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.taskText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    margin: 6,
    borderRadius: 4,
    backgroundColor: "blueviolet",
  },

  pressedItem: {
    opacity: 0.5,
  },

  taskText: {
    padding: 6,
    color: "white",
  },
});

export default TaskItem;
