import React, {useState} from "react";
import { StyleSheet, ScrollView, View, Pressable, Text, TextInput, Button } from "react-native";

export default function ToDoForm(props) {
    const [input, setInput] = useState("");
    const { addTask } = props;
    const handleChangeText = (text) => setInput(text);
    const handlePress = (text) => addTask(input);
  return (
    <>
    <ScrollView>
        {tasks.map((task, index) => (
          <Pressable key={index}>
            <View style={[styles.task]}>
              <Text style={styles.taskText}>{task}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
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

