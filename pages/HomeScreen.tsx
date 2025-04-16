import { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TaskInput } from '../app/components/TaskInput';
import { TaskList } from '../app/components/TaskList';

export const HomeScreen: React.FC = () => {
  const [tasks, setTasks] = useState<{ id: number; title: string; completed: boolean }[]>([]);

  useEffect(() => {
    const loadTasks = async () => {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    };
    loadTasks();
  }, []);

  useEffect(() => {
    const saveTasks = async () => {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    };
    saveTasks();
  }, [tasks]);

  const addTask = (taskTitle: string) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), title: taskTitle, completed: false },
    ]);
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Task Manager</Text>
      </View>
      <View style={styles.content}>
        <TaskInput onAddTask={addTask} />
        <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTaskCompletion} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa', 
  },
  header: {
    backgroundColor: '#4a90e2',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    elevation: 4,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  taskListContainer: {
    marginTop: 20,
  },
});