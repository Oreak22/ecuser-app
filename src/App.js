import './App.css';
import Body from './component/Body';
import NavBar from './component/NavBar';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
// import Excuse from './component/Excuse';
import {Routes,Route,Navigate} from 'react-router-dom'
import Footer from './component/Footer';
// import NavBar from './component/NavBar';

function App() {
 



  return (
    <>
      
      <NavBar></NavBar> 
      <Routes>
          <Route path='/' element={<Body></Body>}></Route>
          {/* <Route path='/excuse' element={}></Route> */}
          <Route path="/home"  element={<Navigate to="/"/>} />

          {/* <Route path="/*" element={<Excuse></Excuse>} /> */}
      </Routes>
      <Footer></Footer>
      </>
      );
    }
    
export default App;


