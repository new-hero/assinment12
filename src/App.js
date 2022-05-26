import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home'
import Header from './Components/Header/Header';
import Protfolio from './Components/Protfolio/Protfolio';
import auth from './firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Notfound from './Components/Notfound/Notfound';
import Private from './Components/Private/Private';
import Loading from './Components/Loading/Loading';
import Purchase from './Components/Purchase/Purchase';
import Dashbord from './Components/Dashbord/Dashbord';
import Review from './Components/Reviews/Review';
import Profile from './Components/Profile/Profile';


function App() {

const [user, loading, error]=useAuthState(auth)

if(loading){
  return <Loading></Loading>
}
  
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/protfolio' element={<Protfolio></Protfolio>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/purchase' element={<Private>
          <Purchase></Purchase>
        </Private>}></Route>
        <Route path='/Dashbord' element={<Private>
          <Dashbord></Dashbord>
        </Private>}>
          {/* <Route path='/dashbord/review'><Review></Review> </Route>
          <Route path='/dashbord/profile'><Profile></Profile> </Route> */}

        </Route> 
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  );
}
// FORm4j1YyYPks6lP tool-admin
export default App;
