import { SET_HOME_DATA } from '../types';

const INITIAL_STATE = {
    latestCompetition: [],
    pendingSubmission: []
};

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_HOME_DATA:
            return { ...state, latestCompetition: action.payload.latestCompetition, pendingSubmission: action.payload.pendingSubmission }
        default:
            return state;
    }
};

