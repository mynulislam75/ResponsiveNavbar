
import Register from './components/Login/Register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar/Navbar';
import PopularMovie from './components/Movielist/PopularMovie';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <PopularMovie></PopularMovie>
      <Routes>
        <Route path='login' element={<div className='flex flex-col justify-center items-center'><Login></Login></div>} />
        <Route path='register' element={<Register></Register>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
