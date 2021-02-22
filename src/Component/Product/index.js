import React from 'react';
import { View, Text, Image, Dimensions, FlatList } from 'react-native';
import Size from '../Size';
import styles from './styles';

/**
 * Common Product component for showing product data
 * @param {productData} Json which contain data of particular product(required)
 */

const Product = ({ producData }) => {

    const { height } = Dimensions.get('window');

    return (
        <View style={styles.container}>
            <View style={styles.detailSection}>
                <View style={{ height: height / 4, width: height / 4, borderRadius: (height / 4) / 2 }}>
                    <Image source={{ uri: producData.image }} style={{ height: height / 4, width: height / 4, borderRadius: (height / 4) / 2 }} />
                </View>
                <Text style={styles.reviewText}>{producData.review ? producData.review : 0} Reviews</Text>
                <Text style={styles.nameText}>{producData.name}</Text>
                <Text style={styles.decriptionText}>{producData.description}</Text>
                <Text style={styles.priceText}>Price: ${producData.price}</Text>
            </View>
            <View style={styles.saperator} />
            <FlatList
                data={producData.sizes}
                bounces={false}
                style={{ backgroundColor: '#F2F3F4' }}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => item.toString() + index}
                renderItem={({ item }) =>
                    // Sizes common component
                    <Size sizeData={item} />
                }
            />
        </View>
    )
}

export default Product;