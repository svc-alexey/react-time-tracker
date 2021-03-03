
export const openCalendarAction = (showCalendar) => {
    return {
        type: 'SHOW-CALENDAR',
        payload: !showCalendar
    }
}