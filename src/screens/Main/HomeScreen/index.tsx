import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MainTabs from "./MainTabs";
import { SearchNormal1 } from "iconsax-react-native"; // Import icon nếu cần
import { useTranslation } from "react-i18next";

const HomeScreen = () => {
    const { t } = useTranslation();

    return (
        <View style={{ flex: 1 }}>
            {/* Thanh tìm kiếm */}
            <View style={styles.InputBackground}>
                <SearchNormal1 size={18} color="#A0A4A8" />
                <Text style={styles.TextDetails}>
                    {t("Tên sự kiện")}
                </Text>
            </View>

            {/* Tabs */}
            <MainTabs />
        </View>
    );
};

const styles = StyleSheet.create({
    InputBackground: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 20, // Bo tròn giống ảnh
        marginHorizontal: 10,
        backgroundColor: "rgba(220, 225, 230, 1)", // Màu xám đậm hơn, không trong suốt
        marginTop: 20,

        // Đổ bóng (fix lỗi vệt trắng)
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 }, // Giảm độ cao để tránh vệt
        shadowOpacity: 0.08, // Làm nhẹ độ mờ bóng
        shadowRadius: 4,
        elevation: 3, // Bóng trên Android
    },
    TextDetails: {
        color: "#A0A4A8", // Màu chữ xám nhạt
        marginLeft: 8,
        fontSize: 16,
    },
});

export default HomeScreen;
