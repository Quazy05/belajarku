import React, { useContext, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  StyleSheet,
  Text, 
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";

import { globalStyles } from '@/styles/globalStyles';
import { UserContext } from '@/context/UserContext';
import Button from '@/components/ui/Button';

const { width } = Dimensions.get('window');

export default function ChangeProfileScreen() {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext); 

  const [tempUsername, setTempUsername] = useState(user.username);
  const [tempEmail, setTempEmail] = useState(user.email);
  const [tempPhone, setTempPhone] = useState(user.phone);
  const [tempLevel, setTempLevel] = useState(user.tingkatan);
  const [tempSchool, setTempSchool] = useState(user.sekolah_asal);

  // ✅ CEK APAKAH ADA PERUBAHAN
  const hasChanges =
    tempUsername !== user.username ||
    tempEmail !== user.email ||
    tempPhone !== user.phone ||
    tempLevel !== user.tingkatan ||
    tempSchool !== user.sekolah_asal;

  // ✅ BACK + KONFIRMASI
  const handleBackWithConfirm = () => {
    if (!hasChanges) {
      router.push('/(tabs)/setting');
      return;
    }

    if (Platform.OS === 'web') {
      const confirmSave = window.confirm('Simpan perubahan profile?');

      if (confirmSave) {
        setUser({
          ...user,
          username: tempUsername,
          email: tempEmail,
          phone: tempPhone,
          tingkatan: tempLevel,
          sekolah_asal: tempSchool,
        });
      }

      router.push('/(tabs)/setting');
      return;
    }

    Alert.alert(
      'Simpan Perubahan?',
      'Kamu memiliki perubahan profile.',
      [
        {
          text: 'Jangan Simpan',
          style: 'destructive',
          onPress: () => router.push('/(tabs)/setting'),
        },
        { text: 'Batal', style: 'cancel' },
        {
          text: 'Simpan',
          onPress: () => {
            setUser({
              ...user,
              username: tempUsername,
              email: tempEmail,
              phone: tempPhone,
              tingkatan: tempLevel,
              sekolah_asal: tempSchool,
            });
            router.push('/(tabs)/setting');
          },
        },
      ]
    );
  };

  // ✅ TOMBOL SIMPAN
  const handleSave = () => {
    setUser({
      ...user,
      username: tempUsername,
      email: tempEmail,
      phone: tempPhone,
      tingkatan: tempLevel,
      sekolah_asal: tempSchool,
    });

    Alert.alert('Berhasil', 'Profile berhasil diperbarui');
    router.push('/(tabs)/setting');
  };

  return (
    <SafeAreaView style={globalStyles.screen}>
      <View style={globalStyles.container}>

        <View style={styles.header}>
          <TouchableOpacity onPress={handleBackWithConfirm} style={styles.backButton}>
            <Ionicons name="arrow-back" size={22} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Ubah Profile</Text>
        </View>

        <View style={styles.inputContainer}>
          
          <Text style={styles.text}>Username</Text>
          <TextInput style={styles.input} value={tempUsername} onChangeText={setTempUsername} />

          <Text style={styles.text}>Tingkatan</Text>
          <TextInput style={styles.input} value={tempLevel} onChangeText={setTempLevel} />

          <Text style={styles.text}>Sekolah Asal</Text>
          <TextInput style={styles.input} value={tempSchool} onChangeText={setTempSchool} />

          <Text style={styles.text}>Email</Text>
          <TextInput style={styles.input} value={tempEmail} onChangeText={setTempEmail} />

          <Text style={styles.text}>Nomor Telepon</Text>
          <TextInput style={styles.input} value={tempPhone} onChangeText={setTempPhone} />

        </View>

        <TouchableOpacity onPress={handleSave}>
          <Button title="Simpan Perubahan" style={{ alignSelf: 'flex-start', marginTop: 30, }} />
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}


const CARD_WIDTH = Math.min(311, width - 40);

const styles = StyleSheet.create({
    // Header
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

    // Input Section Style
    inputContainer: {
        width: CARD_WIDTH,
        marginTop: 18,
        gap: 12,
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },
    input: {
        backgroundColor: '#FFFFFF',
        height: 44,
        borderRadius: 22,
        paddingHorizontal: 16,
        color: '#27AE60',
        fontSize: 20,
    }, 
});