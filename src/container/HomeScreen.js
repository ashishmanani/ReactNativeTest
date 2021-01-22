import HomeScreen from '../screens/HomeScreen';
import { connect } from 'react-redux';
import { get_Competition } from '../redux/actions';

const mapStateToProps = state => ({
    latestCompetition: state.homeReducer.latestCompetition,
    pendingSubmission: state.homeReducer.pendingSubmission
});

const mapDispatchToProps = {
    get_Competition
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeScreen);