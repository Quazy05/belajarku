// ...existing code...
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Text, 
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';

import { globalStyles } from '@/styles/globalStyles';
import Button from '@/components/ui/Button';

const { width } = Dimensions.get('window');

export default function LoginScreen() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
  return (
    <SafeAreaView style={globalStyles.screen}>
        <View style={globalStyles.container}>
          <View style={styles.ConMain}>
            {/* Logo */}
            <View style={styles.header}>
            <Image
                source={require('@/assets/images/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            </View>

            {/* Login Form */}
            <View style={styles.cardWrapper}>
                <View style={styles.card}>
                    {/* Input Field */}
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            placeholderTextColor="#9E9E9E"
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Username"
                            placeholderTextColor="#9E9E9E"
                            value={username}
                            onChangeText={setUsername}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Nomor Telepon"
                            placeholderTextColor="#9E9E9E"
                            value={phone}
                            onChangeText={setPhone}
                        />
                    </View>
                    {/* Input Field End */}

                    {/* Button Login */}
                    <View style={styles.button}>
                      <Link href="/auth/newPassword" asChild>
                        <Button title="Register" style={{ alignSelf: 'flex-start' }} />
                      </Link>
                    </View>
                    {/* Button Login End */}

                    {/* Register */}
                    <View style={styles.registerContainer}>
                     <Text style={styles.registerText}>Sudah Memiliki Akun?</Text>                      
                     <Text
                        style={styles.registerLink}
                        onPress={() => router.push('../')}
                      >
                        LOGIN
                      </Text>
                    </View>
                    {/* Register End */}
                </View>
            </View>
          </View>  
        </View>
    </SafeAreaView>
  );
}

const CARD_WIDTH = Math.min(311, width - 40);

const styles = StyleSheet.create({
  ConMain: {
    width: 344,
    height: 544,
  },
  header: {
    height: 150,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 12,
  },
  logo: {
    width: 311,
    height: '100%',
  },
  cardWrapper: {
    alignItems: 'center',
    marginTop: 0,
  },
  card: {
    width: CARD_WIDTH,
    height: 411,
    backgroundColor: '#fff',
    borderRadius: 40,
    paddingVertical: 28,
    paddingHorizontal: 0,
    // shadow
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: 245,
    marginTop: 18,
    gap: 12,
  },
  input: {
    backgroundColor: '#D9D9D9',
    height: 44,
    borderRadius: 22,
    paddingHorizontal: 16,
    color: '#747474',
    fontSize: 20,
  }, 
  button: {
    marginTop: 40,
  },   
  registerContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  registerText: {
    color: '#666',
    marginBottom: 6,
    fontSize: 12,
  },
  registerLink: {
    color: '#19A463',
    fontWeight: '700',
    fontSize: 14,
  },
});
