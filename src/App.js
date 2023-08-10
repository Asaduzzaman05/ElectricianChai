//import logo from './logo.svg';
import './App.css';
//import Foot from './components/Foot'; 
import Loginn from './components/Loginn'; 
import Mainbody from './components/Mainbody'; 
import Navbar from './components/Navbar';
import Signupp from './components/Signupp';

import Feature from './components/Feature';
import Experts from './components/Experts';

import  React from "react";

 import {
  BrowserRouter as Router,
  
  Route,
  Routes
 
} from "react-router-dom"; 


function App() {
  return (
   <>

 

<Router>
<div>
<Navbar/>


<Routes>

  <Route path='/' element={<Mainbody/>} />
  <Route path='/Feature' element={<Feature/>} />
  <Route path='/Loginn' element={<Loginn/>} />
  <Route path='/Signupp' element={<Signupp/>} />
  <Route path='/Experts' element={<Experts/>} />
          
</Routes>

</div>

</Router>  

   </>
  );
}

export default App;
