import { useSelector } from 'react-redux';
import styles from '../styles/header.module.css';
import { HiOutlineArrowRightOnRectangle } from 'react-icons/hi2';

function Header() {
  const currentUser = useSelector((state) => state.booking.currentUser);

  return (
    <header className={styles.header}>
      <h1>Bookings.com</h1>
      <div className={styles.rightDiv}>
        <p>{currentUser}</p>
        <HiOutlineArrowRightOnRectangle className={styles.logout} />
      </div>
    </header>
  );
}

export default Header;
