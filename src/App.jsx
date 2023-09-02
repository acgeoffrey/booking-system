import { BrowserRouter, Route, Routes } from 'react-router-dom';

import store from './store';

import Dashboard from './pages/Dashboard';
import AppLayout from './components/AppLayout';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path='/' element={<Dashboard />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
