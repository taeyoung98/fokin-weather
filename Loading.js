import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

function Loading() {
    return(
        <View style={styles.contatiner}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.text}>Getting the Happy Weather</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    contatiner: {
        flex: 1,
        backgroundColor: '#FDF6AA',
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingVertical:100,
    },
    text: {
        color: '#2c2c2c',
        fontSize: 30,
        width: '80%',
    }
})

export default Loading;