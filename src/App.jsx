
import Home from './Home.jsx';
import Navbar from './Navbar.jsx';
import ShimmerUI from './ShimmerUI.jsx';
import {Outlet} from 'react-router-dom';
import ThemeContext from './utility/ThemeContext.jsx';


function App(){
  return(
    <>
        <ThemeContext>

          <Navbar> </Navbar>
          <Outlet></Outlet>
          {/* <ShimmerUI></ShimmerUI> */}
          
        </ThemeContext>
    </>
  )
}

export default App;