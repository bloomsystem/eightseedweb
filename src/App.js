import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Index } from './pages/Index';
import { Post } from './pages/Post';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
