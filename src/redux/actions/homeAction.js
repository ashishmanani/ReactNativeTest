import { SET_HOME_DATA } from '../types';

export const get_Competition = () => {
     return async (dispatch) => {
          dispatch({
               type: SET_HOME_DATA,
               payload: {
                    latestCompetition: [
                         { name: 'Competition Name', days: '3 days left', type_price: 'Art & Craft, 500RS', detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                         { name: 'Competition Name', days: '3 days left', type_price: 'Art & Craft, 500RS', detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                         { name: 'Competition Name', days: '3 days left', type_price: 'Art & Craft, 500RS', detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                         { name: 'Competition Name', days: '3 days left', type_price: 'Art & Craft, 500RS', detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                         { name: 'Competition Name', days: '3 days left', type_price: 'Art & Craft, 500RS', detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                         { name: 'Competition Name', days: '3 days left', type_price: 'Art & Craft, 500RS', detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' }
                    ],
                    pendingSubmission: [
                         { name: 'Competition Name', days: '3 days left', type_price: 'Art & Craft, 500RS', detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                         { name: 'Competition Name', days: '3 days left', type_price: 'Art & Craft, 500RS', detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                         { name: 'Competition Name', days: '3 days left', type_price: 'Art & Craft, 500RS', detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                         { name: 'Competition Name', days: '3 days left', type_price: 'Art & Craft, 500RS', detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                         { name: 'Competition Name', days: '3 days left', type_price: 'Art & Craft, 500RS', detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                         { name: 'Competition Name', days: '3 days left', type_price: 'Art & Craft, 500RS', detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' }
                    ]
               }
          });
     }
}