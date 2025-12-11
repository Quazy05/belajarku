import React, { useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";

import { globalStyles } from '@/styles/globalStyles';
import { Ionicons } from "@expo/vector-icons";
const { width } = Dimensions.get('window');

export default function AddChatScreen() {
  const router = useRouter();

  const [subject, setSubject] = useState("");
  const [textValue, setTextValue] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <SafeAreaView style={globalStyles.screen}>
      <View style={globalStyles.container}>

        {/* Header */}
        <View style={styles.header}>
            <TouchableOpacity onPress={() => router.push("/forum")} style={styles.backButton}>
              <Ionicons name="arrow-back" size={22} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Add Chat</Text>
        </View>

        {/* Form Box */}
        <View style={styles.formBox}>
          <TextInput
            placeholder="Subjek"
            placeholderTextColor="#999"
            value={subject}
            onChangeText={setSubject}
            style={styles.input}
          />

          <TextInput
            placeholder="Tambahkan Text"
            placeholderTextColor="#999"
            value={textValue}
            onChangeText={setTextValue}
            style={styles.textArea}
            multiline
          />

          <View style={styles.row}>
            <TouchableOpacity style={styles.addImageBtn}>
              <Text style={styles.addImageText}>Add Image</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.sendBtn}
              onPress={() => setShowConfirm(true)}
            >
              <Text style={styles.sendText}>Kirim</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* POPUP CONFIRM */}
        <Modal visible={showConfirm} transparent animationType="fade">
          <View style={styles.modalBackground}>
            <View style={styles.modalBox}>
              <Ionicons name="chatbox" size={40} color="#27AE60" />
              <Text style={styles.modalTitle}>Kirim Percakapan?</Text>

              <TouchableOpacity style={styles.modalSend}  onPress={() =>{ setShowConfirm(false); router.replace("/forum"); }} >
                <Text style={styles.modalSendText}>Kirim</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.modalBack}
                onPress={() => setShowConfirm(false)}
              >
                <Text style={styles.modalBackText}>Kembali</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {/* Navbar Bottom */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

//   header
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 30, // Jarak antara header dan kartu
        width: '100%',
    },
    backButton: {
        padding: 5,
        marginRight: 20,
    },
    backIcon: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },

  formBox: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    width: Math.min(350, width - 40),
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 14,
  },
  textArea: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    height: 200,
    textAlignVertical: "top",
    fontSize: 14,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  addImageBtn: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#27AE60",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 10,
  },
  addImageText: {
    color: "#27AE60",
    fontWeight: "bold",
  },

  sendBtn: {
    backgroundColor: "#27AE60",
    paddingHorizontal: 25,
    paddingVertical: 8,
    borderRadius: 10,
  },
  sendText: {
    color: "white",
    fontWeight: "bold",
  },

  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    width: 260,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    marginVertical: 15,
    fontWeight: "600",
  },

  modalSend: {
    width: "100%",
    backgroundColor: "#27AE60",
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalSendText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },

  modalBack: {
    width: "100%",
    backgroundColor: "#E5E5E5",
    paddingVertical: 10,
    borderRadius: 10,
  },
  modalBackText: {
    color: "#333",
    fontWeight: "bold",
    textAlign: "center",
  },
});
