// import React, { useState, useEffect } from 'react';
// import {
//   SafeAreaView,
//   View,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
// } from 'react-native';
// import { useRouter } from 'expo-router';
// import { Ionicons } from '@expo/vector-icons';
// import Pdf from 'react-native-pdf';
// import { Asset } from 'expo-asset';

// export default function TemplateScreen() {
//     const router = useRouter();
//     const [zoom, setZoom] = useState(1.0); // zoom default 

//     // PDF local
//     const pdfResource = {
//         uri: Asset.fromModule(
//             require('../../../assets/pdf/bangunDatarPDF.pdf')
//         ).uri,
//     };

//     const zoomIn = () => {
//         if (zoom < 3) setZoom(zoom + 0.5);
//     };

//     const zoomOut = () => {
//         if (zoom > 1) setZoom(zoom - 0.5);
//     };

//     const resetZoom = () => {
//         setZoom(1);
//     };

//     return (
//         <SafeAreaView style={styles.screen}>
//         <View style={styles.container}>

//             {/* Header Back */}
//             <View style={styles.header}>
//                 <TouchableOpacity onPress={() => router.push("/LIbrary")} style={styles.backButton}>
//                     <Ionicons name="arrow-back" size={22} color="#fff" />
//                 </TouchableOpacity>
//                 <Text style={styles.headerTitle}>Library</Text>
//             </View>

//             {/* PDF Viewer */}
//             <View style={{ flex: 1 }}>
//             <Pdf
//                 source={pdfResource}
//                 trustAllCerts={false}
//                 style={styles.pdf}

//                 // Vertical scroll
//                 horizontal={false}

//                 // Zoom control
//                 minScale={1.0}
//                 maxScale={3.0}
//                 scale={zoom}
                
//                 // Selalu mulai dari page 1  
//                 page={1}

//                 onLoadComplete={(pages) => {
//                     console.log("Total pages:", pages);
//                 }}
//                 onError={(error) => {
//                     console.log("PDF ERROR:", error);
//                 }}
//             />
                
//             </View>
//             {/* Zoom Buttons */}
//                 <View style={styles.zoomControls}>
//                     <TouchableOpacity style={styles.zoomButton} onPress={zoomOut}>
//                         <Ionicons name="remove" size={24} color="#fff" />
//                     </TouchableOpacity>

//                     <TouchableOpacity style={styles.zoomButton} onPress={resetZoom}>
//                         <Ionicons name="refresh" size={24} color="#fff" />
//                     </TouchableOpacity>

//                     <TouchableOpacity style={styles.zoomButton} onPress={zoomIn}>
//                         <Ionicons name="add" size={24} color="#fff" />
//                     </TouchableOpacity>
//                 </View>
//         </View>
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     screen: {
//         flex: 1,
//         backgroundColor: '#27AE60',
//     },

//     container: {
//         flex: 1,
//         width: '100%',
//         height: '100%',
//         paddingTop: 50,
//         paddingHorizontal: 20,
//         backgroundColor: "#27AE60"
//     },

//   header: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingHorizontal: 10,
//         marginBottom: 30, // Jarak antara header dan kartu
//         width: '100%',
//     },
//     backButton: {
//         padding: 5,
//         marginRight: 20,
//     },
//     backIcon: {
//         fontSize: 30,
//         color: 'white',
//         fontWeight: 'bold',
//     },
//     headerTitle: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: 'white',
//     },

//     pdf: {
//         flex: 1,
//         width: '100%',
//         // backgroundColor: '#fff',
//     },

//     zoomControls: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         paddingVertical: 10,
//         gap: 10,
//     },

//     zoomButton: {
//         backgroundColor: '#27AE60',
//         padding: 12,
//         borderRadius: 50,
//         elevation: 4,
//     },
// });
