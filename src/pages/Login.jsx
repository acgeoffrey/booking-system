import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../bookingSlice';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('admin');

  const dispatch = useDispatch();

  // Checking for current user, if yes redirect to dashboard
  const currentUser = useSelector((state) => state.booking.currentUser);
  if (currentUser.length > 0) return navigate('/');

  // Handling form submission
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addUser(username));
    navigate('/');
  }

  return (
    <main>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Enter Your Name</label>
        <input
          type='text'
          id='username'
          name='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </main>
  );
}

export default Login;
