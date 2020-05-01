import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const FavoritesScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>This is my Favorites Screen!</Text>
            <Ionicons name="md-heart" size={32} color="red" />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavoritesScreen;