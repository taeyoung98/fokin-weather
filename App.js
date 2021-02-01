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
      <View style={styles.yellowView}></View>
      <View style={{flex: 4, backgroundColor: 'blue'}}></View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  // all space is used.  
    backgroundColor: 'skyblue',
    // native flexDirection default 'column'
    // web flex-direction default 'row'
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    flex: 1,
    color: 'white',
    fontSize: 100
  },
  yellowView: {
    flex: 1,
    backgroundColor: 'yellow'
  }
});
