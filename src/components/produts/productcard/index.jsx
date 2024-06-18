import React from 'react'
import './index.css';
function Productcard({ image, price, name, symbol, exchange }) {
  return (
    <div className='card-container'>
              <img className='card-image' src={image} height={150} width={150} />

        <div className='header'>
            {name}
        </div>
        <div className='price'>
            {symbol} {Math.round(price * exchange)}
        </div>
    </div>
  )
}

export default Productcard
