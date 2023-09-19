import { Routes, Route } from 'react-router-dom';
import Index from '../pages/Index';

function Main(props) {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </main>
  );
}

export default Main;