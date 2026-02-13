import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TodoListScreen from '../screens/TodoListScreen';
import AddTaskScreen from '../screens/AddTaskScreen';

export type TodoStackParamList = {
  TodoList: undefined;
  AddTask: { addTask: (task: string) => void };
};
const Stack = createNativeStackNavigator<TodoStackParamList>();


const TodoStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TodoList"
        component={TodoListScreen}
        options={{ title: 'My Todo List' }}
      />
      <Stack.Screen
        name="AddTask"
        component={AddTaskScreen}
        options={{ title: 'Add Task' }}
      />
    </Stack.Navigator>
  );
};

export default TodoStack;
