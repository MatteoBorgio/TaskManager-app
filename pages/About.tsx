import { View, Text, StyleSheet } from 'react-native';

export const About = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>About Us</Text>
        <Text style={styles.text}>
          App for task management and productivity.
          {'\n'}This app helps you manage your tasks efficiently and effectively.
        </Text>
        <Text style={styles.version}>Version 1.0.0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f5f7fa',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 50,
    padding: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
    width: '85%',
    alignItems: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#4a90e2',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: '#4f4f4f',
    marginBottom: 20,
    lineHeight: 27,
  },
  version: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#828282',
  },
});

