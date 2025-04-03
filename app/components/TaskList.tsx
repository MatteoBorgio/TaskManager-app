import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import {TaskItem} from './TaskItem';

interface TaskListProps {
  tasks: { id: number; title: string; completed: boolean }[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onToggle }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem task={item} onDelete={onDelete} onToggle={onToggle} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    padding: 20,
  },
});
