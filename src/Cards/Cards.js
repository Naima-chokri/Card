import React from 'react'
import SingleCard from './SingleCard'
import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.webp';

const Cards = () => {
  return (
    <div className='container-fluid d-flex justify-content-cneter'>
       <div className="row">
           <div className="col-md-4">
              <SingleCard imgsrc={img1} title='First' />
           </div>
           <div className="col-md-4">
              <SingleCard imgsrc={img2} title='Second' />
           </div>
           <div className="col-md-4">
              <SingleCard imgsrc={img3} title='Third' />
           </div>
       </div>
       
    </div>
  )
}

export default Cards