import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import './App.css';
import { Index } from './pages/Index';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
