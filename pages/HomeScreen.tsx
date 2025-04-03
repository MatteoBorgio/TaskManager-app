import { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TaskInput } from '../app/components/TaskInput';
import { TaskList } from '../app/components/TaskList';

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
    <>
    <View style={styles.container}>
      <Text style={styles.title}>Gestione Attività</Text>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTaskCompletion} />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});