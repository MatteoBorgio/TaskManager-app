import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface TaskItemProps {
  task: { id: number; title: string; completed: boolean };
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onToggle }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => onToggle(task.id)}>
        <Text style={[styles.itemText, task.completed && styles.completedText]}>
          {task.completed ? '[✓]' : '[ ]'} {task.title}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(task.id)}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
    marginHorizontal: 10,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  deleteText: {
    color: 'red',
    marginLeft: 10,
  },
});

