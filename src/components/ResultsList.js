import React from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results }) => {

    const navigation = useNavigation();

    return <View style={styles.contianer}>
        <Text style={styles.titleStyle}> {title} </Text>
        <FlatList
            horizontal
            data={results}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('ResultsShowScreen')}>
                        <ResultsDetail result={item} />
                    </TouchableOpacity>
                )
            }}
        />

    </View>
};

const styles = StyleSheet.create({
    contianer: {
        marginBottom: 10
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
});

export default ResultsList;