import { useSelector } from 'react-redux';
import RoomCard from './RoomCard';
import styles from '../styles/dashboard.module.css';

function AllRooms() {
  const rooms = useSelector((state) => state.booking.rooms) || [];

  return (
    <div className={styles.allRoomsContainer}>
      <h2>Available Rooms</h2>
      <div className={styles.allRooms}>
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
}

export default AllRooms;
