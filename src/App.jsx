
import Home from './Home.jsx';
import Navbar from './Navbar.jsx';
import ShimmerUI from './ShimmerUI.jsx';
import {Outlet} from 'react-router-dom';
import ThemeContextProvider from './utility/ThemeContexProvider.jsx';


function App(){
  return(
    <>
        <ThemeContextProvider>

          <Navbar> </Navbar>
          <Outlet></Outlet>
          {/* <ShimmerUI></ShimmerUI> */}

        </ThemeContextProvider>
    </>
  )
}

export default App;

// function App(){
//   return(
//     <>
       

//           <EX> </EX>
 
//     </>
//   )
// }

// export default App;