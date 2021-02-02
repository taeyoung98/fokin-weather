import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
    ThunderStrom: {
        iconName: "weather-lightning-rainy",
        gradient: ["#000046", "#c0c0aa"]
    }, Drizzle: {
        iconName: "weather-rainy", 
        gradient: ["#7F7FD5", "#86A8E7", "#91EAE4"]
    }, Rain: {
        iconName: "weather-pouring",
        gradient: ["#3498db", "#2c3e50"]
    }, Snow: {
        iconName: "weather-snowy-heavy",
        gradient: ["#D3CCE3", "#E9E4F0"]
    }, Clear: {
        iconName: "weather-sunny",
        gradient: ["#2F80ED", "#56CCF2"]
    }, Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#2c3e50", "#bdc3c7"]
    }, Mist: {
        iconName: "weather-hazy",
        gradient: ["#636FA4", "#E8CBC0"]
    }, Haze: {
        iconName: "weather-hazy",
        gradient: ["#636FA4", "#E8CBC0"]
    },Dust: {
        iconName: "weather-fog",
        gradient: ["#5A3F37", "#b29f94"]
    }, Sand: {
        iconName: "weather-fog",
        gradient: ["#eea849", "#f46b45"]
    }, Ash: {
        iconName: "weather-fog",
        gradient: ["#616161", "#9bc5c3"]
    }, Smoke: {
        iconName: "weather-fog",
        gradient: ["#616161", "#9bc5c3"]
    }, Fog: {
        iconName: "weather-fog",
        gradient: ["#616161", "#9bc5c3"]
    }, Squall: {
        iconName: "weather-windy",
        gradient: ["#292E49", "#536976", "#BBD2C5"]
    }, Tornado: {
        iconName: "weather-tornado",
        gradient: ["#0f3443", "#34e89e"]
    }
}


export default function Weather({ temp, condition }) {
    return(
        <LinearGradient
        // Background Linear Gradient
        colors={weatherOptions[condition].gradient}
        style={styles.container} >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName || "weather-sunset"} size={100} color="white" />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.halfContainer}></View>
        </LinearGradient>
    );
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "ThunderStrom", "Drizzle", "Rain", "Snow", "Clear", "Clouds", 
        "Mist", "Smoke", "Haze", "Dust", "Fog", "Sand", "Ash", "Squall", "Tornado"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 40,
        color: "white"
    }
})