import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './Loading';

/**
 * In iOS and Android, the ways that make a mobile app like Natvie
 * 1. real native: Swift or objective-c -> Xcode / Java or Kotlin -> Android Studio
 * 2. webview based on app
 */

/* npm run ios */
// live reload: save -> refresh automatically
export default function App() {
  return (
    <Loading />
  );
}
