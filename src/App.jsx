
import Home from './Home.jsx';
import Navbar from './Navbar.jsx';
import ShimmerUI from './ShimmerUI.jsx';
import {Outlet} from 'react-router-dom';


function App(){
  return(
    <>
            <Navbar> </Navbar>
            <Outlet></Outlet>
            {/* <ShimmerUI></ShimmerUI> */}

    </>
  )
}

export default App;