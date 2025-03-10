import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import moment from "moment-timezone";
import styles from "./styles";

const eventList2 = [
    { id: "1", image: `https://picsum.photos/200/300?random=${Math.random()}`, nameEvent: "Lễ Hội Bắn Pháo Hoa" },
    { id: "2", image: `https://source.unsplash.com/200x300/?festival`, nameEvent: "Lễ Hội Mùa Xuân" },
    { id: "3", image: `https://source.unsplash.com/200x300/?dance`, nameEvent: "Đêm Nhạc EDM" },
    { id: "4", image: `https://picsum.photos/200/300?random=${Math.random()}`, nameEvent: "Giải Đua Xe Địa Hình" },
    { id: "5", image: `https://source.unsplash.com/200x300/?art`, nameEvent: "Triển Lãm Điêu Khắc" },
    { id: "6", image: `https://picsum.photos/200/300?random=${Math.random()}`, nameEvent: "Hội Chợ Đồ Cổ" },
    { id: "7", image: `https://source.unsplash.com/200x300/?literature`, nameEvent: "Gặp Gỡ Nhà Văn" },
    { id: "8", image: `https://picsum.photos/200/300?random=${Math.random()}`, nameEvent: "Hội Thảo Kinh Doanh" },
    { id: "9", image: `https://source.unsplash.com/200x300/?gaming`, nameEvent: "Giải Đấu Esports" },
    { id: "10", image: `https://picsum.photos/200/300?random=${Math.random()}`, nameEvent: "Hội Chợ Thủ Công" },
];

const ForYou = ({ navigation }: any) => {
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
                data={eventList2}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={styles.row}
            />
        </View>
    );
};

export default ForYou;
