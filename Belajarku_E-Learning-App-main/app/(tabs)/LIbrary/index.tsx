import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  StyleSheet,
  Text, 
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { globalStyles } from '@/styles/globalStyles';

import CardMateri from '@/components/ui/CardLibrary';


export default function LibraryScreen() {
    const router = useRouter();

    const libraryItems = [
        { id: 1, title: 'Bangun Datar', subject: 'Matematika', color: '#FF5C5C', pdf: 'BangunDatar.pdf' },
        { id: 2, title: 'Aljabar', subject: 'Matematika', color: '#2E537D', pdf: 'Aljabar.pdf' },
        { id: 3, title: 'Termokimia', subject: 'Kimia', color: '#556E7A', pdf: 'Termokimia.pdf' },
        { id: 4, title: 'Termokimia', subject: 'Kimia', color: '#556E7A', pdf: 'Termokimia.pdf' },
        { id: 5, title: 'Termokimia', subject: 'Kimia', color: '#556E7A', pdf: 'Termokimia.pdf' }
    ];
    
    return (
        <SafeAreaView style={globalStyles.screen}>
            <View style={globalStyles.container}>
                {/* Header Back */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.push("/Dashboard")} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={22} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Library</Text>
                </View>
                
                {/* Navigation Back End */}

                {/* List Items */}
                <ScrollView showsHorizontalScrollIndicator={false}>
                  <View style={{ marginTop: 20, alignItems: 'center' }}>
                    {libraryItems.map((item) => (
                      <View style={{ marginBottom: 20 }} key={item.id}>
                        <CardMateri
                          titleCard={item.title}
                          subject={item.subject}
                          color={item.color}
                          onPress={() => router.push("/LIbrary/bacaPdf")}
                        />
                      </View>
                      ))}
                  </View>
                  
                </ScrollView>
                {/* Navbar Bottom End */}
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
});