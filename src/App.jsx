
import {Routes, Route} from 'react-router-dom'
import Main from './components/Main'
import Login from './components/Login/Login'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
