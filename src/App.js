import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home'
import Header from './Components/Header/Header';
import Protfolio from './Components/Protfolio/Protfolio';
import app from './firebase.init';
import{getAuth} from 'firebase/auth'

const auth= getAuth(app)
function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/protfolio' element={<Protfolio></Protfolio>}></Route>
      </Routes>
    </div>
  );
}

export default App;
