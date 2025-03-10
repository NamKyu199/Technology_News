import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import moment from "moment-timezone";
import styles from "./styles";

const eventList3 = [
    { id: "1", image: `https://picsum.photos/200/300?random=${Math.random()}`, nameEvent: "Đêm Hội Trăng Rằm" },
    { id: "2", image: `https://source.unsplash.com/200x300/?musicfestival`, nameEvent: "Lễ Hội Âm Nhạc" },
    { id: "3", image: `https://source.unsplash.com/200x300/?sports`, nameEvent: "Giải Đua Xe Đạp" },
    { id: "4", image: `https://picsum.photos/200/300?random=${Math.random()}`, nameEvent: "Hội Thảo Sức Khỏe" },
    { id: "5", image: `https://source.unsplash.com/200x300/?museum`, nameEvent: "Triển Lãm Bảo Tàng" },
    { id: "6", image: `https://picsum.photos/200/300?random=${Math.random()}`, nameEvent: "Chợ Phiên Cuối Tuần" },
    { id: "7", image: `https://source.unsplash.com/200x300/?author`, nameEvent: "Giao Lưu Nhà Báo" },
    { id: "8", image: `https://picsum.photos/200/300?random=${Math.random()}`, nameEvent: "Hội Thảo AI" },
    { id: "9", image: `https://source.unsplash.com/200x300/?cars`, nameEvent: "Triển Lãm Ô Tô" },
    { id: "10", image: `https://picsum.photos/200/300?random=${Math.random()}`, nameEvent: "Hội Thảo Thiết Kế" },
];
const HighQualityScreen = ({ navigation }: any) => {
    const renderItem = ({ item }: any) => {
        return (
            <TouchableOpacity style={styles.itemContainer}
                onPress={() => navigation.navigate("DetailsImage", { item })}
            >
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.overlay}>
                    <Text style={styles.title} numberOfLines={2}>{item.nameEvent}</Text>
                    <Text style={styles.participants}>{item.interestedUsers} người quan tâm - {item.participantUsers} người sẽ tham gia</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{paddingHorizontal:5}}>
            <FlatList
                data={eventList3}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={styles.row}
            />
        </View>
    );
};

export default HighQualityScreen;
