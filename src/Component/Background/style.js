import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Colors } from '@common';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export default styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flex: 1
    },
    primaryContainer: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        backgroundColor: Colors.Primary,
        zIndex: 0
    },
    secondaryContainer: {
        flex: 1,
        position: 'absolute',
        zIndex: 1,
        overflow: 'hidden',
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: SCREEN_WIDTH * 2,
        borderTopWidth: SCREEN_WIDTH * 2,
        borderLeftColor: 'transparent',
        borderTopColor: Colors.Secondary,
        transform: [{ rotate: Platform.OS === 'ios' ? '180deg' : '170deg' }],
        marginTop: (SCREEN_HEIGHT / 2) - (Platform.OS === 'ios' ? (SCREEN_HEIGHT / 20) : SCREEN_HEIGHT / 8)
    }
})