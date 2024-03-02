import ToDoList from './components/ToDoList';
import React from 'react';
import styled from 'styled-components/native'
import { useState } from 'react';

const App = () => {
  const [tasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

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
};

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

