// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter, Routes, Route,Outlet,Navigate  } from 'react-router-dom';
// import ImageSection from './pages/imageSection';

import Herosection from './pages/herosection1';
// import About from './pages/onas';
//  import Oferta from './pages/Oferta';
//    import ContactForm from './pages/contact';
 import './App.css';

const App = () => {
  return (
   

     <>
      <BrowserRouter>
   
        
        <Outlet />
        <Routes>
         
       <Route  exact path="/"  element={<Herosection />} /> 
       {/* <Route exact path="/onas" element={<About />} />
         <Route exact path="/Oferta" element={<Oferta />}/>
     <Route exact path="/contact" element={<ContactForm />} />    */}
         {/* <Route path='*' element={<Navigate to='/' />} /> */}
          
         
         
          
         
        </Routes> 
      
      </BrowserRouter>
    </>
  );
};

export default App;
