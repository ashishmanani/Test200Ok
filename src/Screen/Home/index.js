import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import Product from '../../Component/Product';
import productData from '../../data.json';
import styles from './styles';

/**
 * Home Page
 */

const Home = () => {
    // for identifying current showing product index
    const [currentIndex, setCurrentIndex] = useState(0);
    // for maximum length of products
    const [maxLength, setMaxLength] = useState(0);

    useEffect(() => {
        setMaxLength(productData.length);
    }, []);

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ backgroundColor: '#5DADE2' }} />
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={{ position: 'absolute', top: 16, left: 10 }}>
                        <View style={[styles.triangle, styles.left]} />
                    </View>
                    <Text style={styles.headerText}>Product Details</Text>
                </View>
                <View style={styles.navigationSection}>
                    <TouchableOpacity onPress={() => {
                        if (currentIndex === 0) {
                            setCurrentIndex(maxLength - 1);
                        } else {
                            setCurrentIndex(currentIndex - 1);
                        }
                    }}>
                        <View style={[styles.triangle, styles.left]} />
                    </TouchableOpacity>
                    <Text style={styles.navigationText}>{(currentIndex + 1) + ' of ' + maxLength}</Text>
                    <TouchableOpacity onPress={() => {
                        if (currentIndex + 1 === maxLength) {
                            setCurrentIndex(0);
                        } else {
                            setCurrentIndex(currentIndex + 1);
                        }
                    }}>
                        <View style={[styles.triangle, styles.right]} />
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    {/* Showing Product */}
                    <Product producData={productData[currentIndex]} />
                </View>
            </View>
            <SafeAreaView style={{ backgroundColor: '#F2F3F4' }} />
        </View>
    )
}

export default Home;