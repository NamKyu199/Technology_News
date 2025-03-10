import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import moment from "moment-timezone";
import styles from "./styles";
const eventList1 = [
    { id: "1", image: `https://picsum.photos/200/300?random=${Math.random()}`, nameEvent: "Lễ Hội Hoa" },
    { id: "2", image: `https://source.unsplash.com/200x300/?concert`, nameEvent: "Đêm Nhạc Acoustic" },
    { id: "3", image: `https://source.unsplash.com/200x300/?marathon`, nameEvent: "Chạy Marathon" },
    { id: "4", image: `https://picsum.photos/200/300?random=${Math.random()}`, nameEvent: "Hội Chợ Ẩm Thực" },
    { id: "5", image: `https://source.unsplash.com/200x300/?exhibition`, nameEvent: "Triển Lãm Nghệ Thuật" },
    { id: "6", image: `https://picsum.photos/200/300?random=${Math.random()}`, nameEvent: "Giải Bóng Đá" },
    { id: "7", image: `https://source.unsplash.com/200x300/?books`, nameEvent: "Hội Chợ Sách" },
    { id: "8", image: `https://picsum.photos/200/300?random=${Math.random()}`, nameEvent: "Hội Nghị Công Nghệ" },
    { id: "9", image: `https://source.unsplash.com/200x300/?conference`, nameEvent: "Buổi Giao Lưu Ký Giả" },
    { id: "10", image: `https://picsum.photos/200/300?random=${Math.random()}`, nameEvent: "Liên Hoan Phim" },
];



const AIScreen = ({ navigation }: any) => {
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
                data={eventList1}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={styles.row}
            />
        </View>
    );
};

export default AIScreen;
