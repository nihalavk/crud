import logo from './logo.svg';
import './App.css';
import Useffect from './Useffect';
import DummyApi from './DummyApi';
import DummyApi2 from './DummyApi2';
import DummyApi3 from './DummyApi3';
import Dummy4 from './Dummy4';
import Fliprouter from './Fliprouter';
import Apibutton from './Apibutton';
import ApiAsync from './ApiAsync';
import ApiAsync2 from './ApiAsync2';
import Carsd2 from './Mapwebsite.jsx/Carsd2';
import Carousel2 from './Mapwebsite.jsx/Carousel2';
import Nav2 from './Mapwebsite.jsx/Nav2';
import Nav1 from './Website/Nav1';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Location from './Components/Location';
import Address from './Components/Address';
import Contact from './Components/Contact';
import Profile from './Components/Profile';
import Flowers from './Flowers';
import Flower from './NewFlower';
import flowers from './Flowers';
import { createContext, useState } from 'react';
import Flowerlist from './Flowerlist';
import Flowercard from './Flowercard';
import Flowertable from './Flowertable';
import NewFlower from './NewFlower';
import Flowerhome from './Flowerhome';
import Detailpage from './Detailpage';
import Ternarytask2 from './Ternarytask2';
import Digitalclock from './Digitalclock/Digitalclock';
import Events from './Events';
import Events2 from './Events2';
import Eventtask from './Eventtask';

export const newcontextflower=createContext()
function App() {
  const [Flower, setFlower] = useState(flowers)
  return (
    <div className="App">
    {/* <BrowserRouter>
    <Nav2/>
    <Routes>
      <Route path='/home' element={<Home/>}></Route> 
      <Route path='/location' element={<Location/>}></Route> 
      <Route path='/address' element={<Address/>}></Route> 
      <Route path='/contact' element={<Contact/>}></Route> 
      <Route path='/profile' element={<Profile/>}></Route> 
    </Routes>
    </BrowserRouter> */} 
    {/* <newcontextflower.Provider value={[Flower,setFlower]}>
      <BrowserRouter>
      <NewFlower/>
      <Routes>
      <Route path='/home' element={<Flowerhome/>}/>
        <Route path='/list' element={<Flowerlist/>}/>
       <Route path='/card' element={<Flowercard/>}/>
        <Route path='/table' element={<Flowertable/>}/>
        <Route path='/detailpage/:Userid' element={<Detailpage/>}/>
        

      </Routes>
      </BrowserRouter>
    </newcontextflower.Provider>  */}



    {/* <Ternarytask2/> */}
    {/* <Digitalclock/> */}
    <Eventtask/>
    </div>
  );
}

export default App;
