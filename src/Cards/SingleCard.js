import React from 'react';
import img1 from '../assets/img1.webp';

const SingleCard = props => {
  return (
    <div className="card text-center">
        <div className="overflow">
            <img src={img1} alt='img1'/>
        </div>
        <div className="card-body text-dark">
        <h4 className="card-title">   Card Title   </h4>
            <p className="card-text text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident illo
                 debitis soluta maiores dicta, optio dolore adipisci labore magni animi?
            </p>
            <a href="#" className='btn btn-outline-success'>Go Anywhere</a>
        </div>
    </div>
  )
}

export default SingleCard