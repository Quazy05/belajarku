import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { router } from 'expo-router';

import { globalStyles } from '@/styles/globalStyles'
import GridItem from '@/components/ui/gridItem';

const { width } = Dimensions.get('window');

const subjects = [
  {
    id: 1,
    title: "Matematika",
    photo: require("../../../assets/images/mat.png"),
    route: "/mainContent/levelEdu",
  },
  {
    id: 2,
    title: "Bahasa Indonesia",
    photo: require("../../../assets/images/idn.png"),
    route: "/mainContent/levelEdu",
  },
  {
    id: 3,
    title: "Biologi",
    // photo: require("../../../assets/images/bio.png"),
    route: "/mainContent/levelEdu",
  },
  {
    id: 4,
    title: "Fisika",
    photo: require("../../../assets/images/idn.png"),
    route: "/mainContent/levelEdu",
  },
  {
    id: 5,
    title: "Fisika",
    photo: require("../../../assets/images/idn.png"),
    route: "/mainContent/levelEdu",
  },
  // {
  //   id: 6,
  //   title: "Fisika",
  //   photo: require("../../../assets/images/idn.png"),
  //   route: "/mainContent/levelEdu",
  // },
];

export default function DashboardScreen() {
    const [search, setSearch] = useState('');
  return (
    <SafeAreaView style={globalStyles.screen}>
        <View style={globalStyles.container}>
            {/* Card Profile and Search */}
            <View style={styles.header}>
                <View style={styles.headerCard}>
                    <View style={styles.headerLeft}>
                        <Text style={styles.greeting}>Halo, Marsel!</Text>
                        <View style={styles.searchBox}>
                          <TextInput
                            style={styles.input}
                            placeholder="🔍  Kamu mau belajar apa hari ini ?"
                            placeholderTextColor="#ffffffcc"
                            value={search}
                            onChangeText={setSearch}
                          />
                        </View>
                    </View>
                    <View style={styles.headerRight}>
                        <View style={styles.avatar}>
                            <Image 
                                source={require('@/assets/images/avatar_circle.png')}
                                style={{width: '100%', height: '100%', borderRadius: 22}}
                                resizeMode="cover"
                            />                          
                        </View>
                    </View>
                </View>
            </View>
            {/* Card Profile and Search End*/}
            
            {/* Subjects grid */}
            <View style={styles.gridWrapper}>
              {subjects.map((s) => (
                <GridItem
                  key={s.id}
                  image={s.photo || require('../../../assets/images/mat.png')}
                  title={s.title}
                  route={s.route}   // bebas mau diarahkan ke mana
                />
              ))}
            </View>
            {/* Subjects grid End */}

            {/* Info section */}
            <Text style={styles.infoTitle}>Belajarku info</Text>
            <View style={styles.infoSection}>
              <TouchableOpacity onPress={() => router.push('/Dashboard')} style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.banner}>
                  <Image 
                    source={require('@/assets/images/event1.png')}
                    style={{width: '100%', height: '100%',}}
                    resizeMode="stretch"
                  />
                </View>
                <Text style={{marginTop: 6,}}>Event Tahunan </Text>  
                </TouchableOpacity>
              </View>

            {/* Info section End */}
        </View>
    </SafeAreaView>
  );
}
const CARD_WIDTH = Math.min(311, width - 40);

const styles = StyleSheet.create({
  header: {
    marginTop: 64,
    marginBottom: 18,
    width: 371,
    height: 173,
  },
  headerCard: {
    width: '100%',
    height: '100%',
    backgroundColor: '#14A35A',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // // subtle shadow
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 6 },
    // shadowOpacity: 0.12,
    // shadowRadius: 8,
    // // android
    // elevation: 6,
  },
  headerLeft: {
    flex: 1,
    height: '100%',
    paddingRight: 8,
    justifyContent: 'flex-end',
  },
  greeting: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  searchBox: {
    backgroundColor: '#ffffff22',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  input: {
    height: 44,
    paddingHorizontal: 16,
    borderColor: 'transparent',
    color: '#fff',
    fontSize: 20,
    outlineWidth: 0,
  },
  searchPlaceholder: {
    color: '#ffffffcc',
    fontSize: 13,
  },
  headerRight: {
    height: '100%',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#14A35A',
  },
  
  gridWrapper: {
    width: CARD_WIDTH,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingVertical: 18,
    backgroundColor: 'transparent',
  },

  infoTitle: {
    width: CARD_WIDTH,
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Poppins',
    fontWeight: 600,
  },
  infoSection: {
    width: CARD_WIDTH,
    height: 201,
    borderRadius: 22,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#14A35A',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  banner: {
    width: '90%',
    height: '70%',
    borderRadius: 5,
    
  },
});

