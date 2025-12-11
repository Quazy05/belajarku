import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  StyleSheet,
  Image,
  Modal,
  Text, 
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { globalStyles } from '@/styles/globalStyles';
import Button from '@/components/ui/Button';

const { width } = Dimensions.get('window');

export default function ProfileScreen() {
    const router = useRouter();
    const [visible, setVisible] = useState(false);

    const handleLogout = () => {
        setVisible(false);
        router.push('../');
    };

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

                {/* Card Name */}
                <View style={styles.cardProfile}>
                    <View style={styles.AvatarPic}></View>
                    <View style={styles.AvatarName}>
                        <Text style={{ fontWeight: '700', }}>Roy</Text>
                        <Text style={{ fontWeight: '700', opacity: 0.5 }}>Roy123@gmail.com</Text>
                    </View>
                </View>
                {/* Card Name End */}
                    
                {/* Content */}

                <View style={styles.ConContent}>
                    <View style={{ width: '100%' }}>

                        {/* Profile */}
                        <Text style={{ fontWeight: '700', opacity: 0.5 }}>Profile</Text>
                        <View style={styles.textBio}>
                            <Text style={{ fontWeight: '700', opacity: 0.5, marginTop: 10 }}>Tingkatan</Text>
                            <Text style={{ fontWeight: '700'}}>Sekolah Dasar</Text>
                            <Text style={{ fontWeight: '700', opacity: 0.5, marginTop: 10 }}>Asal</Text>
                            <Text style={{ fontWeight: '700'}}>SDN Ikan Cupang 01 </Text>
                            <Text style={{ fontWeight: '700', opacity: 0.5, marginTop: 10 }}>No. Telepon</Text>
                            <Text style={{ fontWeight: '700'}}>082***** </Text>
                        </View>

                        {/* Lainnya */}
                        <View style={{ height: 1, backgroundColor: '#ccc', width: '100%', marginLeft: -10, marginTop: 10 }}></View>
                        <Text style={{ fontWeight: '700', opacity: 0.5, marginTop: 10 }}>Lainnya</Text>
                        <View style={styles.textBio}>
                            <View style={{ marginTop: 10 }}>                      
                                <Text
                                    style={{ fontWeight: '700', color: '#27AE60', marginBottom: 10 }}
                                    onPress={() => router.push('/setting')}
                                >
                                Pengaturan
                                </Text>
                                
                                <Text
                                    style={{ fontWeight: '700', color: '#EF2531', marginBottom: 10 }}
                                    onPress={() => setVisible(true)}
                                >
                                Logout
                                </Text>

                            </View>
                        </View>
                        {/* Modal Alert */}
                        <Modal
                            transparent
                            visible={visible}
                            animationType="fade"
                            onRequestClose={() => setVisible(false)}>
                            <View style={styles.overlay}>
                            <View style={styles.alertBox}>
                                <Image 
                                    source={require('../../../assets/icon/warning.png')}
                                    style={{width: 60, height: 50, alignSelf: 'center', marginBottom: 10}}
                                />
                                <Text style={styles.message}>Apakah anda yakin ingin keluar</Text>

                                <View style={styles.buttonRow}>

                                    <View style={styles.button}>
                                        <Button 
                                            title="Kembali" 
                                            onPress={() => setVisible(false)}
                                            style={{ alignSelf: 'flex-start' }} 
                                        />
                                    </View>

                                    <View style={styles.button}>
                                        <Button 
                                            title="Logout" 
                                            onPress={handleLogout}
                                            style={{ alignSelf: 'flex-start', backgroundColor: '#EF2531' }} 
                                        />
                                    </View>
                                
                                </View>
                            </View>
                            </View>
                        </Modal>
                    </View>
                </View>

                {/* Content End */}
            </View>
        </SafeAreaView>
    );
}

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

  // Card Style
  cardProfile: {
    width: 336,
    height: 86,
    marginVertical: 30,
    backgroundColor: '#fff',
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  AvatarPic: {
    width: 63,
    height: 63,
    borderRadius: 40,
    backgroundColor: '#C4C4C4',
  },
  AvatarName: {
    width: 200,
  },

  // Content Profile
  ConContent: {
    width: 336,
    height: 378,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    padding: 30,
  },
  textBio: {
    marginLeft: 20,
  },

  // Modal Style
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)', // transparan gelap
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertBox: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    elevation: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  message: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'column',
    gap: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    marginTop: 0,
    alignItems: 'center',
  },
  cancelBtn: {
    marginRight: 10,
    backgroundColor: '#eee',
  },
  confirmBtn: {
    backgroundColor: '#EF2531',
  },
  cancelText: {
    color: '#333',
    fontWeight: '600',
  },
  confirmText: {
    color: '#fff',
    fontWeight: '600',
  },
})