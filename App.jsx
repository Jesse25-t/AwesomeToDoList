import ToDoList from './components/ToDoList';
import React from 'react';
import { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

function App() {
  const [tasks] = useState(
    [
      'Do laundry',
      'Go to gym',
      'Walk dog'
    ]
  );
  // styles

  return (
    <Wrapper>
      <Content>
        <Header>To do list</Header>
        {tasks.map(task => {
          return <ToDoList task={task} />;
        })}
      </Content>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.View`
  background-color: #f7ced2;
  flex: 1;
`;

const Content = styled.View`
  margin-top: 100px;
  align-items: center;
`;

const Header = styled.Text`
  margin-top: 10px;
  color: #000;
  font-size: 36px;
`;

