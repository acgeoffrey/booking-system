import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HiArrowLeft } from 'react-icons/hi2';

import styles from '../styles/room.module.css';
import Slot from '../components/Slot';
import { bookRooms } from '../bookingSlice';

function Room() {
  const params = useParams();
  const dispatch = useDispatch();

  const roomDetails = useSelector((state) =>
    state.booking.rooms.find((item) => item.id === params.id)
  );
  const currentUser = useSelector((state) => state.user.currentUser);

  const [selectSlot, setSelectSlot] = useState(null);
  // console.log(roomDetails);

  function handleBook(e) {
    e.preventDefault();
    if (selectSlot)
      dispatch(
        bookRooms({ id: roomDetails.id, slotId: selectSlot, user: currentUser })
      );
    setSelectSlot(null);
  }

  return (
    <main className={styles.room}>
      <Link className='' to='/'>
        <HiArrowLeft /> Go Back
      </Link>
      <h2>{roomDetails?.name}</h2>

      <h4>All Available Slots</h4>
      <div className={styles.allSlots}>
        {roomDetails.slots.map((slot) => (
          <Slot
            key={slot.id}
            slot={slot}
            isSelected={selectSlot}
            onSelect={setSelectSlot}
          />
        ))}
      </div>
      <button
        className={styles.bookBtn}
        onClick={handleBook}
        disabled={!selectSlot}
      >
        Book Slot
      </button>
    </main>
  );
}

export default Room;
