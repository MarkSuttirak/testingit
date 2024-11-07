import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestOne from './pages/test';
import TestTwo from './pages/test-two';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/test" element={<TestOne />}/>
        <Route path="/test-two" element={<TestTwo />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;