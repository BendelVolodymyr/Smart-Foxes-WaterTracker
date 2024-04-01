const formatTime = (dateTimeString) => {
    const date = new Date(dateTimeString);

    let hours = date.getHours();
    const minutes = date.getMinutes();

    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 12 годин у вечорі вважаються як 12 AM
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')} ${ampm}`;
    return formattedTime;
};
export default formatTime;