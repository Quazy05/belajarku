// components/CardMateri.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '@/components/ui/Button'

type Props = {
  titleCard: string;
  subject: string;
  color: string;
  onPress?: () => void;
};

export default function CardMateri({ titleCard, color, subject, onPress }: Props) {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
        <View style={{ alignItems: 'flex-start', width: '100%' }}>
            <Text style={styles.title}>{titleCard}</Text>
            <Text style={styles.subject}>{subject}</Text>
        </View>

        <View style={ styles.button }>
            <Button 
                title="Buka PDF" 
                onPress={onPress}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 338,
    height: 204,
    borderRadius: 16,
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontFamily: 'poppins-regular',
    fontWeight: '300',
    marginBottom: 4,
  },
  subject: {
    color: '#fff',
    opacity: 0.8,
    fontSize: 14,
  },
  button: {
    width: '80%',// hijau tombol
    borderRadius: 0,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
});
