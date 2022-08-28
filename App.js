import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard
} from "react-native";
import Task from "./components/Task";

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ededed"
  },
  wrapper: {
    paddingTop: 40,
    paddingHorizontal: 20
  },
  items: {
    marginTop: 25
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },

  writeTaskWrapper: {
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 1,
    // height: 70,
    width: "100%",
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },

  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1
  }
});

// main function
function App() {
  // States
  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([]);

  // add task
  const handleAddTask = () => {
    Keyboard.dismiss();
    if (task !== "") {
      setTaskItems([...taskItems, task]);
      setTask("");
    }
  };

  // complete / delete task
  const completeTas = (id) => {
    const completedTasks = taskItems.filter(
      (task, index) => id !== index && task
    );
    setTaskItems(completedTasks);
  };

  // jxs
  return (
    <View style={styles.container}>
      {/* Task Container */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.wrapper}>
          <Text style={styles.title}>Today's Task</Text>

          {/* Task's list */}
          <View style={styles.items}>
            {taskItems.map((item, index) => (
              <TouchableOpacity key={index} onPress={() => completeTas(index)}>
                <Task text={item} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

// export
export default App;

