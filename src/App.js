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
import Blogs from './Components/Blogs/Blogs';
import Tools from './Components/Tools/Tools';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Review from './Components/Reviews/Review';
import Profile from './Components/Profile/Profile';
import Myorder from './Components/Myorder/Myorder';
import Allusers from './Components/Dashbord/Allusers';
// import Managetool from './Components/Managetools/Managetool';
import Managetools from './Components/Managetools/Managetools';
import Managetool from './Components/Managetools/Managetool';
import Allorders from './Components/Allorders/Allorders';



function App() {

  const [user, loading, error] = useAuthState(auth)

  if (loading) {
    return <Loading></Loading>
  }

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/tools' element={<Tools></Tools>}></Route>
        <Route path='/protfolio' element={<Protfolio></Protfolio>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/tools' element={<Tools></Tools>}></Route>
        <Route path='/tools/:id' element={<Private>
          <Purchase></Purchase>
        </Private>}></Route>
        <Route path='/manage' element={<Private>
          <Managetools></Managetools>
        </Private>}></Route>
        <Route path='/manage/:id' element={<Private>
          <Managetool></Managetool>
        </Private>}></Route>

        <Route path='/dashbord' element={<Private>
          <Dashbord /></Private>}>
          <Route index element={<Profile></Profile>}></Route>
          <Route path='/dashbord/review' element={<Review></Review>}> </Route>
          <Route path='/dashbord/allorders' element={<Allorders></Allorders>}> </Route>
          <Route path='/dashbord/allusers' element={<Allusers></Allusers>}> </Route>
          <Route path='/dashbord/orders' element={<Myorder />} > </Route>
        </Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}
// FORm4j1YyYPks6lP tool-admin
export default App;
