const SHOW_CALENDAR = 'SHOW-CALENDAR';

const getDate = () => {
    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    let today = new Date ();
    let date = `${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;
    return date;
}


const initialState = {
    day:  getDate(),
}

export default function dateReducer(state=initialState, action){

    switch (action.type) {
        case SHOW_CALENDAR: {
    return {...state, showCalendar: action.payload}
        }
        default:
            return state;
    }
}
