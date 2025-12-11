import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  StyleSheet,
  Text, 
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";

import { globalStyles } from '@/styles/globalStyles';
import CardSubContent from '@/components/ui/cardSubContent';

const { width } = Dimensions.get('window');

// --- Halaman Utama ---
export default function MathematicsScreen() {
    const router = useRouter();
    const levelEdu = [
    { 
      id: 1, 
      title: "Aljabar",  
      route: "/mainContent/subMateri",
    },
    { 
      id: 2, 
      title: "Himpunan", 
      route: "/mainContent/subMateri",
    },
    { 
      id: 3, 
      title: "Pola Bilangan",   
      route: "/mainContent/subMateri",
    },
    { 
      id: 4, 
      title: "Fungsi",   
      route: "/mainContent/subMateri",
    },
    { 
      id: 5, 
      title: "SPLTV",   
      route: "/mainContent/subMateri",
    },
    { 
      id: 6, 
      title: "Statistika",   
      route: "/mainContent/subMateri",
    }
    ];

    return (
        <SafeAreaView style={globalStyles.screen}>
            <View style={globalStyles.container}>
                {/* Header dengan tombol kembali dan judul */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.push("/mainContent/levelEdu")} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={22} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>SD</Text>
                </View>

                {/* Daftar Pilihan Materi*/}
                <View style={styles.cardListContainer}>
                    {levelEdu.map((item) => (
                    <View style={{ marginBottom: 20 }} key={item.id}>
                        <CardSubContent
                            title={item.title}
                            route={item.route}
                        />
                    </View>
                    ))}
                </View>
               
            </View>
        </SafeAreaView>
    );
}

// Lebar kartu disesuaikan agar lebih fleksibel di dalam container hijau
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

    // --- Gaya Kartu Level ---
    cardListContainer: {
        width: '100%',
        alignItems: 'center', // Agar kartu berada di tengah
    }
});