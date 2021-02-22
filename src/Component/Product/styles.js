import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1
    },
    saperator: {
        height: 1,
        width: '100%',
        backgroundColor: 'black'
    },
    detailSection: {
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    reviewText: {
        marginTop: 5,
        fontSize: 12
    },
    nameText: {
        fontSize: 20,
        textAlign: 'center'
    },
    decriptionText: {
        fontSize: 15,
        textAlign: 'center'
    },
    priceText: {
        fontSize: 15, 
        fontWeight: 'bold', 
        textAlign: 'center'
    }
})