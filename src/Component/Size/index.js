import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

/**
 * Common Size component for showing product sizes
 * @param {sizeData} Json which contain data of particular product sizes(required)
 */

const Size = ({ sizeData }) => {
    return (
        <View style={styles.container}>
            <View style={styles.sizeNameContainer}>
                <Text style={{ textAlign: 'center' }}>{sizeData.name}</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>{sizeData.description}</Text>
                <Text>Count: {sizeData.count}</Text>
            </View>
            <View style={styles.priceContainer}>
                <Text style={{ fontWeight: 'bold' }}>$ {sizeData.price}</Text>
            </View>
        </View>
    )
}

export default Size;