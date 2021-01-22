import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '@common';
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');


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
    competitionNameTxt: {
        fontWeight: 'bold',
        flex: 1
    },
    daysTxt: {
        fontSize: 10,
        color: Colors.PrimaryÎ
    },
    amountTxt: {
        fontSize: 12,
        color: Colors.Primary,
        marginTop: 5
    },
    competitionDetailTxt: {
        fontSize: 12,
        color: Colors.Primary,
        marginTop: 5
    },
    marginTOp10: {
        marginTop: 10
    },
    backBtnContainer: {
        position: 'absolute',
        zIndex: 3,
        left: 20,
        top: 5
    },
    headerTxt: {
        color: Colors.White,
        textAlign: 'center',
        fontSize: 20
    },
    contentContainer: {
        margin: 20,
        borderRadius: 15,
        backgroundColor: Colors.White,
        width: SCREEN_WIDTH - 40,
        alignItems: 'center'
    },
    img: {
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        height: SCREEN_HEIGHT / 3,
        width: SCREEN_WIDTH - 40
    },
    imgBorder: {
        borderTopWidth: 1,
        width: SCREEN_WIDTH - 40
    },
    dotContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 5
    },
    dot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        borderColor: Colors.Primary,
        borderWidth: 1,
        margin: 5
    },
    detailContainer: {
        padding: 20,
        alignItems: 'flex-start'
    },
    btn: {
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 20,
        width: SCREEN_WIDTH - 80
    },
    btnTxt: {
        padding: 10,
        color: Colors.White
    }
});