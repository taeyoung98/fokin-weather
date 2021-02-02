import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
    ThunderStrom: {
        iconName: "weather-lightning-rainy",
        gradient: ["#000046", "#c0c0aa"],
        title: "ThunderStrom",
        subTitle: "You can be a grilled man"
    }, Drizzle: {
        iconName: "weather-rainy", 
        gradient: ["#7F7FD5", "#86A8E7", "#91EAE4"],
        title: "Drizzle",
        subTitle: "It's annoying"
    }, Rain: {
        iconName: "weather-pouring",
        gradient: ["#2c3e50", "#3498db"],
        title: "Rain",
        subTitle: "Try getting in the rain"
    }, Snow: {
        iconName: "weather-snowy-heavy",
        gradient: ["#D3CCE3", "#E9E4F0"],
        title: "Snow",
        subTitle: "Let's make a snowman"
    }, Clear: {
        iconName: "weather-sunny",
        gradient: ["#2F80ED", "#56CCF2"],
        title: "Clear",
        subTitle: "Let's go on a picnic"
    }, Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#2c3e50", "#bdc3c7"],
        title: "Clouds",
        subTitle: "I miss the blue blue sky"
    }, Mist: {
        iconName: "weather-hazy",
        gradient: ["#636FA4", "#E8CBC0"],
        title: "Mist",
        subTitle: "Don't drive a car"
    }, Haze: {
        iconName: "weather-hazy",
        gradient: ["#636FA4", "#E8CBC0"],
        title: "Haze",
        subTitle: "Don't drive a car"
    }, Dust: {
        iconName: "weather-fog",
        gradient: ["#5A3F37", "#b29f94"],
        title: "Dust",
        subTitle: "Just don't go outside"
    }, Sand: {
        iconName: "weather-fog",
        gradient: ["#eea849", "#f46b45"],
        title: "Sand",
        subTitle: "Just don't go outside"
    }, Ash: {
        iconName: "weather-fog",
        gradient: ["#616161", "#9bc5c3"],
        title: "Ash",
        subTitle: "Don't drive a car"
    }, Smoke: {
        iconName: "weather-fog",
        gradient: ["#616161", "#9bc5c3"],
        title: "Smoke",
        subTitle: "Don't drive a car"
    }, Fog: {
        iconName: "weather-fog",
        gradient: ["#616161", "#9bc5c3"],
        title: "Fog",
        subTitle: "Don't drive a car"
    }, Squall: {
        iconName: "weather-windy",
        gradient: ["#292E49", "#536976", "#BBD2C5"],
        title: "Squall",
        subTitle: "If you go out, you can fly"
    }, Tornado: {
        iconName: "weather-tornado",
        gradient: ["#0f3443", "#34e89e"],
        title: "Tornado",
        subTitle: "The world is a blender"
    }
}

export default function Weather({ temp, condition, description, icon }) {
    return(
        <LinearGradient
        // Background Linear Gradient
        colors={weatherOptions[condition].gradient}
        style={styles.container} >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                {/* <MaterialCommunityIcons name={weatherOptions[condition].iconName || "weather-sunset"} size={90} color="white" /> */}
                <Image source={{uri: `http://openweathermap.org/img/wn/${icon}@2x.png`}} style={{width: 170, height: 170}} />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                {/* <Text style={styles.title}>{weatherOptions[condition].title}</Text> */}
                <Text style={styles.title}>{description}</Text>
                <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
            </View>
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
    },

    textContainer: {
        flex: 1,
        marginLeft: -50,
        alignItems: "flex-start"
    },
    title: {
        fontWeight: "300",
        fontSize: 50,
        color: "white",
        marginBottom: 10 
    },
    subTitle: {
        fontWeight: "600",
        fontSize: 24,
        color: "white"
    }
})