import React from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ReplyInputBox({ value, onChange, onSubmit }: any) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Tulis balasan..."
        value={value}
        onChangeText={onChange}
        style={styles.input}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.btnText}>Kirim</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    width: "100%",
  },
  input: {
    minHeight: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
    backgroundColor: "#F8F8F8",
  },
  button: {
    backgroundColor: "#27AE60",
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
});
