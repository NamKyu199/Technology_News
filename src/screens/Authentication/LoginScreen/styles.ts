import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    buttonChangeLanguage: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        paddingLeft: 10,
        gap: 5,
    },
    container: {
        flexGrow: 1,
        marginHorizontal: 30,
        justifyContent: 'space-between',
    },

    button: {
        borderRadius: 8,
        padding: 4,
        marginVertical: 5,
    },
    header: {
        alignItems: 'flex-end',
    },
    content: {
        justifyContent: 'center',
    },
    contentText: {
        fontSize: 20,
    },
    footer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    footerText: {
        color: 'white',
        fontSize: 18,
    },

    groupTextInput: {
        paddingVertical: 5,
    },

    forgotPassword: {
        color: '#6655D0',
        marginBottom:5
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        overflow: 'hidden',
    },
    icon: {
        marginLeft: 10,
    },
    extraIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
    },

    formOption: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    mascot: {
        alignSelf: 'center',
        width: 125,
        height: 125,
        borderRadius: 125 / 2,
        borderWidth: 1,
        borderColor: '#FD87FF33',
    },
    logo: {
        alignSelf: 'center',
        resizeMode: 'contain',
        width: 160,
        height: 80,
    },
    socials: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        padding: 15,
    },
    socialItem: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
    },
    flag: {
        height: 16,
        width: 24,
        borderRadius: 2,
    },
    textCenter: {
        textAlign: 'center',
    },
    textGetting: {
        textAlign: 'center',
        marginVertical: 15,
        color: '#00000073',
        fontSize:13,
    },

    hotline: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#BC4893',
    },
    eye: {
        padding: 4,
    },

    dropdown: {
        margin: 16,
        height: 50,
        width: 150,
        backgroundColor: '#EEEEEE',
        borderRadius: 22,
        paddingHorizontal: 8,
    },
    imageStyle: {
        width: 24,
        height: 24,
        borderRadius: 12,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
        marginLeft: 8,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
});

export default styles;
