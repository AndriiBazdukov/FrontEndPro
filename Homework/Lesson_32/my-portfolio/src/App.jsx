import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TodoPage from './pages/TodoPage';
import SwapiPage from './pages/Swapi';

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/swapi" element={<SwapiPage />} />
      </Routes>

      <Footer />
    </>
  );
}