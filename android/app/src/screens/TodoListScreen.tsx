import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';

import TodoItem from '../components/TodoItems';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TodoStackParamList } from '../navigation/TodoStack';

type TodoListNavigationProp =
  NativeStackNavigationProp<TodoStackParamList, 'TodoList'>;

const TodoListScreen = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const navigation = useNavigation<TodoListNavigationProp>();

  const deleteTask = (index: number) => {
    setTasks(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todo List</Text>

      <Button
        title="Add Task"
        onPress={() =>
          navigation.navigate('AddTask', {
            addTask: (newTask: string) => {
              setTasks(prev => [...prev, newTask]);
            },
          })
        }
      />

      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <TodoItem
            title={item}
            onDelete={() => deleteTask(index)}
          />
        )}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ marginTop: 20 }}
      />
    </View>
  );
};

export default TodoListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});
