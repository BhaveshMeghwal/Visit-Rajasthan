import React from 'react'
import './Card.css'
import img from '../assets/design245.png'

const Card = (props) => {
  return (
    <div className='card-section'>
        <div className="card">
          <img className='card-design-img' src={img} alt=''/>
          <img className='card-img' src={props.img} alt='/'/>
          <div className="card-body">
            <p className='card-title'>{props.name}</p>
            <h5>{props.destination}</h5>
            {/* <p className='card-content'>
            Amer Fort is known for its artistic style elements.
            </p> */}
          </div>
        </div>

    </div>
  )
}

export default Card