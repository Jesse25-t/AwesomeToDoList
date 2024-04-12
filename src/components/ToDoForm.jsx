import React, {useState, useEffect} from "react";
import tasksData from '../data/tasks.json';
import { StyleSheet, ScrollView, View, Pressable, Text, TextInput, Button } from "react-native";

export default function ToDoForm(props) {
    const [input, setInput] = useState("");
    const { addTask } = props;
    const [task, setTask] = useState("");
    const handleChangeText = (text) => setInput(text);
    const handlePress = (text) => addTask(input);

    useEffect(() => {
      const tasks = tasksData.map((task) => task)
        setTask(tasks);
    }, []);

    const handleAddTask = (task) => addTask(task);
  return (
    <>
        <View style={styles.form}> 
        <TextInput
            style={styles.input}
            placeholder="Add a new task"
            onChangeText={handleChangeText}
            value={input}
        />
        <Button title="add" onPress={handlePress}/>
        </View>
    </>
  );
}
const styles = StyleSheet.create({
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
    },
  });

