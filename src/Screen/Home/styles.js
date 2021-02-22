import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        padding: 10,
        backgroundColor: '#5DADE2'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF'
    },
    navigationSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderBottomWidth: 1
    },
    navigationText: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 15
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 6,
        borderRightWidth: 6,
        borderBottomWidth: 12,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "#000"
    },
    left: {
        transform: [{ rotate: "-90deg" }]
    },
    right: {
        transform: [{ rotate: "90deg" }]
    }
})