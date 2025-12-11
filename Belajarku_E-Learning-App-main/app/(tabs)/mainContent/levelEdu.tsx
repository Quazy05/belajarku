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
import CardLevelEdu from '@/components/ui/cardLevelEdu';
import { globalStyles } from '@/styles/globalStyles';

const { width } = Dimensions.get('window');

// --- Halaman Utama ---
export default function MathematicsScreen() {
    const router = useRouter();
    const levelEdu = [
    { 
      id: 1, 
      level: "SD", 
      imageSource: require('../../../assets/images/sd.png'),
      route: "/mainContent/materi",  
    },
    { 
      id: 2, 
      level: "SMP", 
      imageSource: require('../../../assets/images/smp.png'), 
      route: "/mainContent/materi",
    },
    { 
      id: 3, 
      level: "SMA", 
      imageSource: require('../../../assets/images/sma.png'),  
      route: "/mainContent/materi",
    },
    ];

    return (
        <SafeAreaView style={globalStyles.screen}>
            <View style={globalStyles.container}>
                {/* Header dengan tombol kembali dan judul */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.push("/Dashboard")} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={22} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Level Education</Text>
                </View>

                {/* Daftar Pilihan Level */}
                <View style={styles.cardListContainer}>
                    {levelEdu.map((item) => (
                        <View style={{ marginBottom: 20 }} key={item.id}>
                            <CardLevelEdu
                            level={item.level}
                            imageSource={item.imageSource}
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
    },
    card: {
        width: CARD_WIDTH,
        height: 120, // Tinggi kartu agar sesuai dengan gambar
        backgroundColor: 'white',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginVertical: 15, // Jarak antar kartu
        
        // Gaya bayangan kartu yang lebih halus
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    cardImage: {
        width: 100, // Lebar gambar
        height: 80, // Tinggi gambar
    },
    cardText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#27AE60', // Warna teks hijau
        flex: 1, // Agar teks mengambil ruang dan mendorong panah ke kanan
        textAlign: 'right',
        marginRight: 20,
    },
    arrowContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderColor: '#27AE60',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    arrowIcon: {
        fontSize: 20,
        color: '#27AE60',
        fontWeight: 'bold',
        // Sedikit penyesuaian untuk sentrasi visual panah '>'
        marginTop: -3, 
        marginLeft: 2, 
    }
});