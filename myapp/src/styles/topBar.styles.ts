import { Platform, StyleSheet } from 'react-native';
import { s, edgeInset } from './util/scales';

export const styles = StyleSheet.create({
    topBar: {
        position: 'absolute',
        top: Platform.OS === 'android' ? s(24) + edgeInset : s(10),
        right: edgeInset,
        left: Platform.OS === 'android' ? '29%' : '42%',
        zIndex: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: s(24),
        gap: s(8),
      },
      filmBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#444',
        borderRadius: s(6),
        paddingHorizontal: s(8),
        paddingVertical: s(3),
        gap: s(4),
        backgroundColor: 'rgba(0,0,0,0.6)',
      },
      filmBadgeEmoji: {
        fontSize: s(16),
        marginRight: s(6),
      },
      filmBadgeImage: {
        width: s(18),
        height: s(18),
        resizeMode: 'contain',
      },
      filmBadgeCount: {
        color: '#fff',
        fontFamily: 'Courier',
        fontSize: s(14),
        fontWeight: 'bold',
      },
      topBarButton: {
        borderWidth: 1,
        borderColor: '#444',
        borderRadius: s(6),
        paddingHorizontal: s(10),
        paddingVertical: s(4),
        backgroundColor: 'rgba(0,0,0,0.6)',
      },
      topBarButtonText: {
        color: '#ccc',
        fontSize: s(18),
        fontFamily: 'Courier',
        fontWeight: 'bold',
      },
    });