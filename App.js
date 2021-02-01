import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * In iOS and Android, the ways that make a mobile app like Natvie
 * 1. real native: Swift or objective-c -> Xcode / Java or Kotlin -> Android Studio
 * 2. webview based on app
 */

/* npm run ios */
// live reload: save -> refresh automatically
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 100
  }
});
