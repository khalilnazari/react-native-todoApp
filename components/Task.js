import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// styles
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  itemsLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 18 // does not work
  },
  square: {
    height: 24,
    width: 24,
    backgroundColor: "#5dc0f5",
    borderRadius: 5, 
    marginRight: 5,
  },
  itemText: {
    maxWidth: "85%"
  },
  circule: {
    backgroundColor: '#5dc0f5',
    border: "2px solid red", // thid does not work,
    height: 10,
    width: 10,
    borderRadius: 10
  }
});

// function
const Task = ({ text }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemsLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <View style={styles.circule}></View>
    </View>
  );
};

export default Task;
