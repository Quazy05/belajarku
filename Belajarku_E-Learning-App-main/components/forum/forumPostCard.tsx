// components/forum/ForumPostCard.tsx
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function ForumPostCard({ item, isReplyOpen, onPressReply }: any) {
  const [liked, setLiked] = useState(false);
  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.headerRow}>
        <View style={styles.row}>
          <Image
            source={require('@/assets/icon/Home.png')}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.username}>{item.user}</Text>
            <Text style={styles.classText}>User</Text>
          </View>
        </View>

        <Text style={styles.date}>{item.date}</Text>
      </View>

      {/* Content */}
      <Text style={styles.content}>{item.content}</Text>

      {/* Icons */}
      <View style={styles.iconRow}>
        {/* icon like */}
        <TouchableOpacity
          onPress={() => {
            setLiked(!liked);    // ini mengubah icon
          }}
        >
          <Ionicons
            name={liked ? "heart" : "heart-outline"}
            size={20}
            color={liked ? "green" : "black"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressReply}>
          <Ionicons
            name={isReplyOpen ? "chatbox" : "chatbox-outline"}
            size={20}
            color={isReplyOpen ? "green" : "black"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
  },
  headerRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  row: { flexDirection: "row", alignItems: "center" },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  username: { fontWeight: "800", fontSize: 16 },
  classText: { color: "#888", fontSize: 12 },
  date: { fontSize: 11, color: "#777" },
  content: { marginTop: 10, lineHeight: 18, color: "#333" },
  iconRow: {
    flexDirection: "row",
    marginTop: 10,
    gap: 15,
  },
  icon: { width: 22, height: 22, tintColor: "#2e7d32" },
});
