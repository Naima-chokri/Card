import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Cards/Cards';
import './App.css';
import Header from './Header';
import './style.css'

function App() {
  return (
    <div  className='pard'>
        <Header />
        <Cards />
        <video style ={{width:"320",height:"240"}} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
   </div>
);
}

export default App;
