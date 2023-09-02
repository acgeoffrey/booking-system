import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../bookingSlice';

function Login() {
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();
  const currentUser = useSelector((store) => store);
  console.log(currentUser);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addUser(username));
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
