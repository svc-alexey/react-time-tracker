const CHANGE_DATE = 'SHOW-CHANGE_DATE';

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
    let today = new Date();
    let date = `${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;
    return date;
}

export const getToday = () => {
    let date = new Date();
    let issuesDate = `${date.getFullYear()}${date.getMonth()}${date.getDay()}`;
    return issuesDate
}


const initialState = {
    day: getDate(),
    today: new Date(),
    todayParse: getToday(),
}

export default function dateReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_DATE: {
            debugger
            let day = (today) => {
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
                let date = `${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;
                return date;
            }
            let newDay = day(action.payload.value);

            const getToday = (date) => {
                let issuesDate = `${date.getFullYear()}${date.getMonth()}${date.getDay()}`;
                return issuesDate
            }
            let todayDate = getToday(action.payload.value);
            return {...state,
                day: newDay,
                today: action.payload.value,
                todayParse: todayDate,
            }
        }
        default:
            return state;
    }
}

export const onChangeDate = (value) => ({
    type: CHANGE_DATE, payload: {value}
});
