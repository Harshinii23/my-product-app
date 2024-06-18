import React from 'react'
import './searchbar.css'


export const Searchbar=
  () => {
  return (
    <div className='searchbar searchbar-dark bg-dark'>
        <div className='container'>
        <h2 className='searchbar1'>Search</h2>
        <form className='textpart'>
            <input type='text'className='border text-white'placeholder='Search'/>
        </form>

        </div>   
    </div>
  )
}
