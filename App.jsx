import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import ToDoList from './src/components/ToDoList';
import ToDoForm from './src/components/ToDoForm';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomePage';
import AboutScreen from './src/screens/AboutPage';
import {
  StyleSheet,
  ScrollView,
  View,
  Pressable,
  Text,
  TextInput,
  Button,
} from 'react-native';

const App = () => {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);
  const handleAddTask = task => {
    setTasks([...tasks, task]);
    const Stack = createNativeStackNavigator();

  };
  return (
    <NavigationContainer>
      {/* <SafeAreaView>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={handleAddTask} />
      </SafeAreaView> */}
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
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
