import { Outlet, useNavigate } from 'react-router-dom';

import Header from './Header';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function AppLayout() {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);

  // checking for currentUser, if no redirect to login page
  useEffect(
    function () {
      if (!currentUser) return navigate('/login');
    },
    [currentUser, navigate]
  );

  return (
    <div className='app-layout'>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
