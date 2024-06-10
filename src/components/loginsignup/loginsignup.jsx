import React from 'react'
import'./loginsignup.css'

export const Loginsignup = () => {
  return (
    <>
    <div className="container">
        <div className="header">
            <div className="text">sign up</div>
            <div className="underline"></div>
        <div className="inputs"></div>
        <div className='input'>
            <input type ="text" />
        </div>
        <div className='input'>
            <input type ="email" />
        </div>
        <div className='input'>
            <input type ="password" />
        </div>
    <div className='password'>
    <div className='forgot password'>lost password?<span>click here</span></div>
    <div className='submit-container'>
        <div className='submit'>sign up</div>
        <div className='submit'>login in</div>
        </div>
        </div>

    </div>
    </div>

    </>
  )
}
