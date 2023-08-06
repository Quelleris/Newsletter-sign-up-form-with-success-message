import React, { useState } from 'react'
import imageDesktop from '/src/images/illustration-sign-up-desktop.svg'
import imageMobile from '/src/images/illustration-sign-up-mobile.svg'

function emailValidation(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export default function Newsletter({onSubmit}) {
  const [email, setEmail] = useState("")
  const [error, setError] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!emailValidation(email)) {
      setError(true)
    }
    else {
      onSubmit(email)
      setEmail("")
    }
  }

  return (
    <div className='newsletter component'>
      <picture className='image-container'>
        <source media='(max-width: 849px)' srcSet={imageMobile}/>
        <img className="newsletter-image" src={imageDesktop} alt=""/>
      </picture>
        <div className="newsletter-content">
        <h2 className='newsletter-title'>Stay updated!</h2>
        <p className='newsletter-text'>
        Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className='newsletter-list'>
            <li className='newsletter-list-item'>
                  Product discovery and building what matters
            </li>
            <li className='newsletter-list-item'>
                Measuring to ensure updates are a success
            </li>
            <li className='newsletter-list-item'>
                And much more!
            </li>
        </ul>
          <form onSubmit={handleSubmit}>
            <div className="input-label-container">
              <label htmlFor="email-input" className='email-label'>Email address</label>
              <p className="error-message">{error ? 'Valid email required' : ''}</p>
            </div>
          <input 
            type="text" 
            placeholder='email@company.com' 
            className={"email-input " + (error ? 'error' : '')} 
            id='email-input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          <button className='newsletter-btn'>Subscribe to monthly newsletter</button>
        </form>
        </div>
    </div>
  )
}
