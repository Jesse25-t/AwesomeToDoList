import React from 'react';
import styled from 'styled-components';

export default function ToDoList({tasks}) {
  return <TextContent>{task}</TextContent>;

  const TextContent = styled.Text`
  margin-top: 10px;
  color: #000;
  font-size: 24px;
  display: flex;
`;
}




