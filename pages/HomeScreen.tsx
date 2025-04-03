import { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TaskInput } from '../app/components/TaskInput';
import { TaskList } from '../app/components/TaskList';
import { LinearGradient } from 'expo-linear-gradient';

export const HomeScreen: React.FC = () => {
  const [tasks, setTasks] = useState<{ id: number; title: string; completed: boolean }[]>([]);

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
    <LinearGradient colors={['#a1c4fd', '#c2e9fb']} style={styles.gradientContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Gestione Attività</Text>
        <TaskInput onAddTask={addTask} />
        <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTaskCompletion} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});