import React from 'react';
import { View } from 'react-native';
import styles from './style';

const Background = () => {
    return (
        <View style={styles.container}>
            <View style={styles.primaryContainer} />
            <View style={styles.secondaryContainer} />
        </View>
    )
}

export default Background;