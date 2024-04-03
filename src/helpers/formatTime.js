const formatTime = (dateTimeString, includeMarker = false) => {
    const date = new Date(dateTimeString);

    let hours = date.getHours();
    const minutes = date.getMinutes();

    let formattedTime = '';

    if (includeMarker) {
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // 12 годин у вечорі вважаються як 12 AM
        formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    } else {
        formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    }

    return formattedTime;
};

export default formatTime;