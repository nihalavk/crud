import logo from './logo.svg';

import Useffect from './Useffect';

import Fliprouter from './Flipkart/Fliprouter';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import flowers from './Flowers/Flowers';
import { createContext, useState } from 'react';
import ListItems from './CRED/Formlist';
import Newtable from './CRED/Newtable';
import Create from './CRED/Create';
import Edit from './CRED/Edit';
import View from './CRED/View';
import Flowercard from './Flowers/Flowercard';
import Flowerlist from './Flowers/Flowerlist'
import Flowertable from './Flowers/Flowertable'
import Flowerhome from './Flowers/Flowerhome'
import Detailpage from './Flowers/Detailpage'
import NewFlower from './Flowers/NewFlower'
export const newcontextflower=createContext()
export const newlistcontext=createContext()
export const newEditContext = createContext()

function App() {
  const [Flower, setFlower] = useState(flowers)
  const [List,setList] = useState(ListItems)
  const [editIndex,setEditIndex] = useState(ListItems);
  
  return (
    <div className="App">
      <newlistcontext.Provider value={[List,setList]}>
      <newEditContext.Provider value={[editIndex,setEditIndex]}>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Newtable/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/view/:Userid' element={<View/>}/>
      <Route path='/edit/:Userid' element={<Edit/>}/>
     </Routes>
     </BrowserRouter>
     </newEditContext.Provider>
      </newlistcontext.Provider> 
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
    </newcontextflower.Provider>   */}
          {/* <BrowserRouter>
    <Nav2/>
    <Routes>
      <Route path='/home' element={<Home/>}></Route> 
      <Route path='/location' element={<Location/>}></Route> 
      <Route path='/address' element={<Address/>}></Route> 
      <Route path='/contact' element={<Contact/>}></Route> 
      <Route path='/profile' element={<Profile/>}></Route> 
    </Routes>
    </BrowserRouter>  */}
    </div>
  );
}

export default App;
