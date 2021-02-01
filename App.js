import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';

/*
export default function App() {
  return (
    <Loading />
  );
}
*/

export default class extends React.Component {
  state = {
    isLoading: true
  }

  getLocation = async() => {
    try {
      const { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      // Send to API and get weather
      console.log(latitude, longitude);
      // this.setState({isLoading: false});
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }

  componentDidMount(){
    this.getLocation();
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}
