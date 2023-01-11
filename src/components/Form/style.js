import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    FormBox: {
        flex: 1,
        top: 30,
        alignItems: "center",
    },
    
    Form: {
        backgroundColor: "#B2B2B2",
        borderRadius: 30,
        marginTop: 30,
        width: "100%",
        height: 400,
        padding: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
    },

    FormText: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    FormTextError: {
        color: "#00ABB3",
        fontSize: 15,
    },

    FormInput: {
        height: 40,
        width: 350,
        borderRadius: 30,
        backgroundColor: "#EAEAEA",
        textAlign: 'center',
        fontSize: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },

    FormButton: {
        backgroundColor: '#3C4048',
        top: 10,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        width: 200,
        height: 40,
        borderRadius: 40,
        margin: 75,
        marginTop: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
    },

    FormButtonText: {
        color: "#EAEAEA",
        fontSize: 15,
    },

    Copyright: {
        textAlign: 'center',
        fontSize: 17,
    },

    ListETH: {
        top: 30,
    }

});

export default styles