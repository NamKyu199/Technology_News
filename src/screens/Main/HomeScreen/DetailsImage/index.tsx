import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Back, Edit, Heart, Message, More, Save2, SearchNormal1, Trash } from "iconsax-react-native";
import { Button } from "react-native-paper";
import { useTranslation } from "react-i18next";

const DetailsImage = ({ route, navigation }: any) => {
    const { t } = useTranslation();
    const { item } = route.params;
    const handleDelete = () => {
        console.log("Xóa ảnh", item.id);
        navigation.goBack();
    };

    const handleSave = () => {
        console.log("Save Image", item.id)
    }

    return (
        <View style={styles.container}>
            {/* Ảnh nền */}
            <Image source={{ uri: item.image }} style={styles.backgroundImage} blurRadius={0} resizeMode="cover" />
            {/* Nội dung hiển thị trên ảnh */}
            <View style={styles.overlay}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={handleDelete} style={styles.button}>
                        <Back size="32" color="#FFFFFF" />
                    </TouchableOpacity>
                    <View style={styles.InputBackground}>
                        <SearchNormal1 size="18" color="#FFFFFF" />
                        <Text style={styles.TextDetails}>
                            {t(item.nameEvent)}
                        </Text>
                    </View>
                </View>
                <View style={styles.likeBackground}>
                    <TouchableOpacity>
                        <Heart
                            size="40"
                            color="#FFFFFF"
                            variant="Bold"
                            style={{ marginLeft: 8 }}
                        />
                        <Text style={styles.TextDetails}>
                            {t('25.1K')}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginTop:30}}>
                        <Message
                            size="40"
                            color="#FFFFFF"
                            variant="Bold"
                            style={{ marginLeft: 8 }}
                        />
                        <Text style={styles.TextDetails}>
                            {t('25.1K')}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginTop:30}}>
                        <More
                            size="40"
                            color="#FFFFFF"
                            style={{ marginLeft: 8 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.backgroudButton}>
                <Button
                    style={styles.button1}
                    mode="contained"
                    buttonColor="#2C2C2C"
                    icon={() => <Save2 size={24} color="#fff" />} // Sửa lại thành function
                    onPress={handleSave}
                >
                    {t('5.3K')}
                </Button>
                <Button
                    style={styles.button2}
                    mode="contained"
                    buttonColor="#0077BE"
                    textColor="#000"  // Đổi màu chữ thành đen
                    onPress={handleSave}
                >
                    {t('Sử dụng mẫu')}
                </Button>
            </View>
        </View>
    );
};

const PAGE_WIDTH = Dimensions.get('window').width;
const PAGE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
    },
    backgroundImage: {
        position: "absolute",
        width: PAGE_WIDTH,
        height: PAGE_HEIGHT,
        resizeMode: "cover",
    },
    overlay: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginTop: 15
    },
    button: {
        // Đổ bóng
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        elevation: 8, // Cho Android
    },
    button1: {
        width: PAGE_WIDTH * 0.25,
        borderRadius: 8

    },
    button2: {
        width: PAGE_WIDTH * 0.65,
        borderRadius: 8,
    },
    backgroudButton: {
        backgroundColor: '#121212',
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: '#000',  // Màu đổ bóng (đen)
        shadowOffset: { width: 0, height: -3 }, // Đổ bóng phía trên
        shadowOpacity: 0.2, // Độ trong suốt của bóng
        shadowRadius: 6, // Độ mờ của bóng
        elevation: 10, // Cho Android
    },
    InputBackground: {
        backgroundColor: 'rgba(135, 141, 144, 0.3)', // Xám nhạt với độ trong suốt
        padding: 10,
        width: PAGE_WIDTH * 0.8,
        borderRadius: 20,
        flexDirection: 'row',
        // Đổ bóng
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        elevation: 8, // Cho Android
    },
    TextDetails: {
        color: 'rgba(255, 255, 255, 0.75)', // Trắng nhạt với độ trong suốt 75%
        marginLeft: 10,
    },
    likeBackground: {
        position: "absolute",
        bottom: 50,  // Đưa xuống cuối màn hình
        right: 10,   // Căn lề phải
        // padding: 10,
        borderRadius: 50, // Bo tròn khung nền

    }
});

export default DetailsImage;
