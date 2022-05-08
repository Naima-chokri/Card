import React from 'react'
import SingleCard from './SingleCard'

const Cards = () => {
  return (
    <div className='container-fluid d-flex justify-content-cneter'>
       <div className="row">
           <div className="col-md-4">
              <SingleCard />
           </div>
           <div className="col-md-4">
              <SingleCard />
           </div>
           <div className="col-md-4">
              <SingleCard />
           </div>
       </div>
       
    </div>
  )
}

export default Cards