const initialState = {
    syncIssues: [{
        color: '#75e1f9',
        label: 'Logo redesign',
        time: '09:00 — 10:00',
        id: 1
    }, {
        color: '#F2994A',
        label: 'Meeting with CEO',
        time: '14:00 — 14:45',
        id: 2
    },
        {
            color: '#8165F0',
            label: 'Brainstorm',
            time: '15:00 — 16:15',
            id: 3
        }
    ]
}

export default function syncReducer(state = initialState, action) {
    return state;
}