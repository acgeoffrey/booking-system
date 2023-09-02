import { Link } from 'react-router-dom';
import styles from '../styles/dashboard.module.css';
import { HiArrowRight } from 'react-icons/hi2';
import { MdOutlineMeetingRoom } from 'react-icons/md';

function Room({ room }) {
  return (
    <div className={styles.roomCard}>
      <MdOutlineMeetingRoom className={styles.roomIcon} />
      <div className={styles.roomCardDiv}>
        <h4>{room.name}</h4>
        <Link to={`room/${room.id}`}>
          View <HiArrowRight />
        </Link>
      </div>
    </div>
  );
}

export default Room;
