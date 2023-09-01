import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './data/timeInterval';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
