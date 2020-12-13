import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ProfileScreen = ({ navigation }) => {
    return (<View>
        <Text style={StyleSheet.text}>Hi There ProfileScreen</Text>
    </View>);
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default ProfileScreen;