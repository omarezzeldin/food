import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import ResultsList from './ResultsList';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

    return (<View style={styles.backgroundStyle}>
        <Feather name="search" color="black" style={styles.iconStyle} />
        <TextInput
            placeholder="Search"
            style={styles.inputStyle}
            value={term}
            onEndEditing={onTermSubmit}
            onChangeText={onTermChange}
            autoCapitalize='none'
            autoCorrect={false}
        />
    </View>);
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;
