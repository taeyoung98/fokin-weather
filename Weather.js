import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";

export default function Weather({ temp }) {
    return(
        <View style={styles.container}>
            <Text>{temp}</Text>
        </View>
    );
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["ThunderStrom", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds", "Haze", "Mist", "Dust"]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})