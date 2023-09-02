import { HiMiniXMark, HiOutlinePencil } from 'react-icons/hi2';
import styles from '../styles/dashboard.module.css';
import { useDispatch } from 'react-redux';
import { remove } from '../bookingSlice';
import { Link } from 'react-router-dom';

function UserBookings({ booking }) {
  const dispatch = useDispatch();

  if (booking.slots?.length < 1) return null;

  function handleRemove(e, data) {
    e.preventDefault();
    dispatch(remove(data));
  }

  return (
    <div className={styles.singleBooking}>
      <h5>{booking.name}</h5>
      <div className={styles.bookingSlots}>
        {booking.slots.map((slot) => (
          <div className={styles.bookingSingleSlot} key={slot.id}>
            <p>{slot.time}</p>
            <Link to={`room/${booking.id}`} className={styles.slotBtn}>
              <HiOutlinePencil />
            </Link>
            <button
              className={styles.delete}
              onClick={(e) =>
                handleRemove(e, { id: booking.id, slotId: slot.id })
              }
            >
              <HiMiniXMark />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserBookings;
