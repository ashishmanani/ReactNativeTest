import { StyleSheet } from 'react-native';
import Colors from './Colors';

const styles = StyleSheet.create({
    shadow: {
        backgroundColor: Colors.White,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'grey',
        shadowOpacity: 0.2,
        shadowRadius: 10
    },
});

export default styles;
