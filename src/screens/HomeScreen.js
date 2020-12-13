import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (<View>
        <Text style={StyleSheet.text}>Hi There HomeScreen</Text>
    </View>);
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;