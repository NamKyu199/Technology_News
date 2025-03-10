import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import moment from "moment-timezone";
import styles from "./styles";

const eventList4 = [
    { id: "1", image: `https://picsum.photos/200/300?random=${Math.random()}`, nameEvent: "Lễ Hội Nghệ Thuật Đường Phố" },
    { id: "2", image: `https://source.unsplash.com/200x300/?standup`, nameEvent: "Đêm Hài Độc Thoại" },
    { id: "3", image: `https://source.unsplash.com/200x300/?racing`, nameEvent: "Giải Đua Xe Công Thức 1" },
    { id: "4", image: `https://picsum.photos/200/300?random=${Math.random()}`, nameEvent: "Triển Lãm Mỹ Thuật" },
    { id: "5", image: `https://source.unsplash.com/200x300/?handmade`, nameEvent: "Hội Chợ Handmade" },
    { id: "6", image: `https://picsum.photos/200/300?random=${Math.random()}`, nameEvent: "Giải Đua Xe Đạp Địa Hình" },
    { id: "7", image: `https://source.unsplash.com/200x300/?education`, nameEvent: "Hội Nghị Giáo Dục" },
    { id: "8", image: `https://picsum.photos/200/300?random=${Math.random()}`, nameEvent: "Hội Chợ Công Nghệ" },
    { id: "9", image: `https://source.unsplash.com/200x300/?fashion`, nameEvent: "Tuần Lễ Thời Trang" },
    { id: "10", image: `https://picsum.photos/200/300?random=${Math.random()}`, nameEvent: "Hội Chợ Xe Cổ" },
];

const TechScreen = ({ navigation }: any) => {
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
                data={eventList4}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={styles.row}
            />
        </View>
    );
};

export default TechScreen;
