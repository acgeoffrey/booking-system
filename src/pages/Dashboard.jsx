import AllRooms from '../components/AllRooms';
import CurrentBookings from '../components/CurrentBookings';

import styles from '../styles/dashboard.module.css';

function Dashboard() {
  return (
    <main className={styles.dashboard}>
      <h1>Dashboard</h1>
      <AllRooms />
      <CurrentBookings />
    </main>
  );
}

export default Dashboard;
