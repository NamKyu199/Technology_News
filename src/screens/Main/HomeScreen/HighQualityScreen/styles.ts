import { Dimensions, StyleSheet } from "react-native";
const PAGE_WIDTH = Dimensions.get('window').width;
const PAGE_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({

    viewMore: {
        color: "blue",
    },
    row: {
        justifyContent: "space-between",
    },
    itemContainer: {
        width: PAGE_WIDTH * 0.48,
        marginBottom: 15,
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "#fff",
    },
    image: {
        width: "100%",
        height: 350,
        borderRadius: 10,
    },
    overlay: {
        padding: 10,
    },
    statusText: {
        fontSize: 12,
        fontWeight: "bold",
        color: "red",
        marginBottom: 5,
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#333",
    },
    participants: {
        fontSize: 12,
        color: "#666",
    },
});
export default styles;