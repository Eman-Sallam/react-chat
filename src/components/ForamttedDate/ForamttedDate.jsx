import dayjs from 'dayjs';

// Compare the current date with the display date to display "Today"
const displayForamttedDate = (dateTime) => {
  const currentDate = dayjs();
  if (currentDate.isSame(dateTime, 'day')) {
    return `Today ${dayjs(dateTime).format('HH:mm')}`;
  } else {
    const formattedDate = dayjs(dateTime).format('MMM DD HH:mm');
    return formattedDate;
  }
};
export default displayForamttedDate;
