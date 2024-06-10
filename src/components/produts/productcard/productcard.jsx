import React from 'react'
import "./index.css"


export const Productcard = ({name, image, price}) => {
  return (
    <div className="card-container">
      <img className='card-image' src={image} height={300} width={300} />
      <p className='card-title'>{name}</p>
      <p className="card-description">{price}</p>
    </div>
  )
}
