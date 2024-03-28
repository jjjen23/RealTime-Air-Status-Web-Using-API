import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './MainPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/fave' element={<div>즐겨 찾기 페이지임</div>} />
      </Routes>
    </div>
  );
}

export default App;
