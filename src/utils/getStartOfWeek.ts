export const getStartOfWeek = ( date:Date ):Date => {

    const currentWeekDay = date.getDay();
    const lessDays = currentWeekDay == 0 ? 6 : currentWeekDay - 1;
    const weekStart = new Date(new Date(date).setDate(date.getDate() - lessDays));

    return weekStart;
}