import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = "a6c23d73fad6694b76e44ee18121fff6";

export default class extends React.Component {
  state = {
    isLoading: true
  }

  getWeather = async(latitude, longitude) => {
    const { data } = await axios.get(
      // http:// required
      // ES6 JS - template strings
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      );
    console.log(data);
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
      this.getWeather(latitude, longitude);
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
