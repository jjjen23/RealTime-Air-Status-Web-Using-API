import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<div>메인페이지</div>} />
        <Route path='/fave' element={<div>즐겨 찾기 페이지임</div>} />
      </Routes>
    </div>
  );
}

export default App;
