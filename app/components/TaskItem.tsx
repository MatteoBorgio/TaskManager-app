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
      <TouchableOpacity onPress={() => onToggle(task.id)} style={styles.taskButton}>
        <Text style={[styles.itemText, task.completed && styles.completedText]}>
          {task.completed ? '✓' : 'o'} {task.title}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(task.id)} style={styles.deleteButton}>
        <Text style={styles.deleteText}>✕</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginVertical: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  taskButton: {
    flex: 1,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  deleteButton: {
    backgroundColor: '#ff6b6b', 
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  deleteText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
