// components/forum/ReplyCard.tsx
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ReplyCard({ item }: any) {
  return (
    <View style={styles.replyCard}>
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

      <Text style={styles.content}>{item.content}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  replyCard: {
    backgroundColor: "#C5EBD6",
    padding: 12,
    marginBottom: 10,
    borderRadius: 12,
    width: "90%",
    alignSelf: "flex-end",
  },
  row: { flexDirection: "row", alignItems: "center" },
  avatar: { width: 32, height: 32, borderRadius: 16, marginRight: 10 },
  username: { fontWeight: "700", fontSize: 14 },
  classText: { color: "#555", fontSize: 12 },
  content: { marginTop: 6, color: "#333" },
  date: { fontSize: 11, color: "#555", marginTop: 4 },
});
