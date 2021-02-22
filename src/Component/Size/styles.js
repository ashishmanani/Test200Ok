import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'grey',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        margin: 10,
        marginBottom: 0,
        borderRadius: 10
    },
    sizeNameContainer: {
        width: '25%',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    descriptionContainer: {
        flex: 1,
        borderLeftWidth: 1,
        padding: 5
    },
    descriptionText: {
        fontSize: 15
    },
    priceContainer:{
        width: '20%', 
        justifyContent: 'flex-start', 
        padding: 5
    }
})