import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Works } from './pages/Works';
import { About } from './pages/About';
import { Index } from './pages/Index';
import { Post } from './pages/Post';
import { Recruit } from './pages/Recruit';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/recruit" element={<Recruit />} />
        <Route path="/works" element={<Works />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
