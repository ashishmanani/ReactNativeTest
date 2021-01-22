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
    margin20: {
        margin: 20
    },
    welComeTxt: {
        color: Colors.White,
        fontSize: 20
    },
    userNameTxt: {
        color: Colors.White,
        fontSize: 20,
        fontWeight: 'bold'
    },
    searchContainer: {
        backgroundColor: Colors.White,
        borderRadius: 10,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5
    },
    inputTxt: {
        fontSize: 15,
        flex: 1,
        padding: 10
    },
    margin10: {
        marginRight: 10
    },
    headingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
        marginLeft: 20
    },
    headingTxt: {
        color: Colors.White,
        fontSize: 15,
        fontWeight: 'bold',
        flex: 1
    },
    seeAllTxt: {
        color: Colors.White,
        fontSize: 10,
        fontWeight: 'bold'
    },
    latestCompetitionContainer: {
        width: SCREEN_WIDTH / 1.3,
        backgroundColor: Colors.White,
        margin: 10,
        borderRadius: 10
    },
    latestCompetitionImage: {
        height: 150, width: SCREEN_WIDTH / 1.3,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    latestCompetitionDetailContainer: {
        borderTopWidth: 1,
        padding: 10
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
        fontSize: 15,
        color: Colors.Primary,
        marginTop: 5
    },
    participateBtnContainer: {
        backgroundColor: Colors.Primary,
        borderRadius: 15,
        padding: 10,
        paddingRight: 15,
        paddingLeft: 15
    },
    pandingSubmissionContainer: {
        height: 150,
        backgroundColor: Colors.White,
        margin: 10,
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row'
    },
    pandingSubmissionImage: {
        height: 150,
        width: '40%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    pandingSubmissionDetailContainer: {
        padding: 10,
        width: '60%'
    },
    pendingSubmissionCompetitionNameTxt: {
        fontWeight: 'bold'
    }
});