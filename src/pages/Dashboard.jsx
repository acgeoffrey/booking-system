import AllRooms from '../components/AllRooms';

import styles from '../styles/dashboard.module.css';

function Dashboard() {
  return (
    <main className={styles.dashboard}>
      <h1>Dashboard</h1>
      <AllRooms />
    </main>
  );
}

export default Dashboard;
