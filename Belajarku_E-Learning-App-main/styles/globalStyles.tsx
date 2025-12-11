import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#27AE60',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        width: 402,
        height: 874,
        backgroundColor: '#27AE60',
        borderRadius: 20,
        alignItems: 'center',

        // shadow (iOS)
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.12,
        shadowRadius: 12,
        // elevation (Android)
        elevation: 8,
    },
})