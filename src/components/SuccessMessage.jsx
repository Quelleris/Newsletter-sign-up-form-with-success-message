import React from 'react'
import successIcon from '/src/images/icon-success.svg'

export default function SuccessMessage({onClick, email}) {
  return (
    <div className='success-message component'>
        <img className='success-image' src={successIcon} alt=""/>
        <h2 className='newsletter-title'>Thanks for subscribing!</h2>
        <p className='newsletter-text'>
        A confirmation email has been sent to
        <strong className='email'>{email}.</strong>
        Please open it and click the button inside to confirm your subscription.
        </p>
        <button className='newsletter-btn' onClick={onClick}>Dismiss message</button>
    </div>
  )
}
