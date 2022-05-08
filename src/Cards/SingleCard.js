import React from 'react';
import img1 from '../assets/img1.webp';
import './SingleCard.css';

const SingleCard = props => {
  return (
    <div className="card text-center shadow">
        <div className="overflow">
            <img src={props.imgsrc} alt='img' className='card-img-top'/>
        </div>
        <div className="card-body text-dark">
        <h4 className="card-title">   {props.title}  </h4>
            <p className="card-text text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident illo
                 debitis soluta maiores dicta, optio dolore adipisci labore magni animi?
            </p>
            <a href="#" className='btn btn-outline-primary'>READ MORE</a>
        </div>
    </div>
  )
}

export default SingleCard