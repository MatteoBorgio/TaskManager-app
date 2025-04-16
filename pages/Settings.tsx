import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

export function Settings() {
  const [isBlueBackground, setIsBlueBackground] = React.useState(false);

  const toggleBackgroundColor = () => setIsBlueBackground((prevState) => !prevState);

  return (
    <View style={[styles.container, { backgroundColor: isBlueBackground ? '#4a90e2' : '#f5f5f5' }]}>
      <Text style={styles.title}>Impostazioni</Text>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Sfondo delle impostazioni blu</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#4a90e2' }}
          thumbColor={isBlueBackground ? '#ffffff' : '#f4f3f4'}
          onValueChange={toggleBackgroundColor}
          value={isBlueBackground}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  settingText: {
    fontSize: 18,
  },
});