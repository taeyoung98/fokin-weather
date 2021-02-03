import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "a6c23d73fad6694b76e44ee18121fff6";

export default class extends React.Component {
  state = {
    isLoading: true
  }

  getWeather = async(latitude, longitude) => {
    const { 
      data: {
        main: {temp},
        weather
      }, data 
    } = await axios.get(
      // http:// required
      // ES6 JS - template strings
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
      );
      console.log(data);
      console.log(weather[0].description);
      this.setState({
        isLoading: false, 
        temp, 
        condition: weather[0].main, 
        description: weather[0].description, 
        icon: weather[0].icon
      });
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
      console.log(latitude, longitude);

      const { country, subregion, city, street } = (await Location.reverseGeocodeAsync({latitude, longitude}))[0];
      console.log(country, subregion, city, street);
      this.setState({ country, subregion, city, street });

    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }

  componentDidMount(){
    this.getLocation();
  }

  render() {
    const { 
      isLoading, temp, condition, description, icon,
      country, subregion, city, street
    } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} description={description} icon={icon}
                                              country={country} subregion={subregion} city={city} street={street} />;
  }
}
