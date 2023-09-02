import { useSelector } from 'react-redux';
import styles from '../styles/dashboard.module.css';
import UserBookings from './UserBookings';

function CurrentBookings() {
  const currentUser = useSelector((state) => state.user.currentUser);

  // aggregating data to get the bookings of the user
  const rooms = useSelector((state) => state.booking.rooms);
  const userBookings = rooms.map((room) => {
    return {
      id: room.id,
      name: room.name,
      slots: room.slots.filter((slot) => slot.isTaken === currentUser),
    };
  });

  return (
    <div className={styles.currentBookings}>
      <h2>Your Current Bookings</h2>
      <div className={styles.userBookings}>
        {userBookings?.map((booking) => (
          <UserBookings key={booking.id} booking={booking} />
        ))}
      </div>
    </div>
  );
}

export default CurrentBookings;
