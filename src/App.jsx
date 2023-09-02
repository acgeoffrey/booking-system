import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import Dashboard from './pages/Dashboard';
import AppLayout from './components/AppLayout';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import Room from './pages/Room';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename='/booking-system'>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path='/' element={<Dashboard />} />
            <Route path='/room/:id' element={<Room />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
