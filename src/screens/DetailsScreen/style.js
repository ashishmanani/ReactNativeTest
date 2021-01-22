import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '@common';
const { width: SCREEN_WIDTH } = Dimensions.get('window');


export default Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    zIndex: {
        zIndex: 2
    },
    flexDirectionRowCenter: {
        flexDirection: 'row',
        alignItems: 'center'
    },
});