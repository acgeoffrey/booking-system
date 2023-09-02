import { Link } from 'react-router-dom';
import styles from '../styles/dashboard.module.css';
import { HiArrowRight } from 'react-icons/hi2';

function Room({ room }) {
  return (
    <div className={styles.room}>
      <h4>{room.name}</h4>
      <Link to={`room/${room.id}`}>
        View <HiArrowRight />
      </Link>
    </div>
  );
}

export default Room;
