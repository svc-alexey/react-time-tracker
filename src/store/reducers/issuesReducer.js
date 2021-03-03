const NEW_WORKLOG = 'NEW_WORKLOG';
const DELETE_WORKLOG = 'DELETE_WORKLOG';
const COPY_WORKLOG = 'COPY_WORKLOG';
const SET_ACTIVE_TIMER = 'SET_ACTIVE_TIMER';

const initialState = {
    issues: [
        {
            time: {
                from: '09:00',
                by: '10:00'
            },
            label: 'JRM-310',
            name: 'Team standup',
            timer: '01:00:00',
            id: 99
        },
    ],
    favoriteIssues: [
        {
            time: {
                from: '14:00',
                by: '17:30'
            },
            label: 'JRM-541',
            name: 'WORK',
            timer: '8:00:00',
            id: 98
        },
    ],
    timer: '00:00:00'
}

export default function issuesReducer(state = initialState, action) {
    let issues = [...state.issues];
    switch (action.type) {
        case NEW_WORKLOG:

        function formatTime(time) {
            let from = Math.trunc(time[0] / 60);
            let from2 = time[0] % 60;
            let by = Math.trunc(time[1] / 60);
            let by2 = time[1] % 60;

            if (time[0] < 600) {
                from = '0' + from;
            }
            if (time[1] < 600) {
                by = '0' + by;
            }
            if (from2 === 0) {
                from2 = '0' + from2;
            }
            if (by2 === 0) {
                by2 = '0' + by2;
            }

            let fromResult = from + ':' + from2;
            let byResult = by + ':' + by2;
            return [fromResult, byResult];
        }

            let resultTime = formatTime(action.payload.sliderValue);
            let from = resultTime[0];
            let by = resultTime[1];

            let formatStopwatchTime = (time) => {
                let seconds = time % 60;
                let minutes = Math.trunc(time / 60 % 60);
                let hour = Math.trunc(time / 3600 % 24);
                if (hour < 10) {
                    hour = '0' + hour
                }
                if (minutes < 10) {
                    minutes = '0' + minutes
                }
                if (seconds < 10) {
                    seconds = '0' + seconds
                }
                let stopWatchTime = hour + ':' + minutes + ':' + seconds;
                return stopWatchTime;
            }

            let stopwatchTime = formatStopwatchTime(action.payload.stopwatchTime);

        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }

            let calculateId = getRandomArbitrary(0, 10);

            issues.push(
                {
                    time: {
                        from: from,
                        by: by
                    },
                    label: action.payload.label,
                    name: action.payload.issue,
                    timer: stopwatchTime,
                    id: calculateId
                });
            return {
                ...state,
                issues
            };
        case DELETE_WORKLOG:
            debugger
            let favoriteIssues = [...state.favoriteIssues];
            if (action.payload.isFavorite === true) favoriteIssues = favoriteIssues.filter(item => item.id !== action.payload.id);
            if (action.payload.isFavorite === false) issues = issues.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                issues,
                favoriteIssues
            };
        case COPY_WORKLOG:
            let initialLabel = action.payload.label;
            let initialName = action.payload.name;
            return {
                ...state,
                initialLabel,
                initialName,
            };
        case SET_ACTIVE_TIMER:
            return {
                ...state,
                isActiveTimer: !state.isActiveTimer
            };
        default:
            return state;
    }
}

export const submitForm = (stopwatchTime, sliderValue, label, issue) => ({
    type: NEW_WORKLOG, payload: {stopwatchTime, sliderValue, label, issue}
});

export const deleteWorklog = (id, isFavorite) => ({
    type: DELETE_WORKLOG, payload: {id, isFavorite}
});

export const copyWorklog = (label, name) => ({
    type: COPY_WORKLOG, payload: {label, name}
});
export const setActiveTimer = () => ({
    type: SET_ACTIVE_TIMER,
});