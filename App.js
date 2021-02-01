import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
  getLocation = async() => {
    const location = await Location.getCurrentPositionAsync(options);
    console.log(location);
  }
  componentDidMount(){
    this.getLocation();
  }
  render() {
    return <Loading />;
  }
}
