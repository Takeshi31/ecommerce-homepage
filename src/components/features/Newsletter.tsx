import React, { useRef, useState } from 'react';

import './newletter.scss'
import Toast from './Toast';

const Newsletter = () => {  
  const message = 'Email is valid'
  const emailRef = useRef<HTMLInputElement>(null);
  const [isValid, setIsValid] = useState(true);
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailValue = emailRef.current?.value;
    const emailRegex = /\S+@\S+\.\S+/;
    const isValidEmail = emailRegex.test(emailValue || '');

    if (isValidEmail) {
      console.log(emailValue);
      handleShowToast()
    }

    if (!isValidEmail) {
      alert(`Please enter a valid email address, email invalid ${emailValue}`)
    }

    setIsValid(isValidEmail);

    console.log(emailRef.current?.value);
  };

  const inputClass = isValid ? '' : 'invalid';

  return (
    <div className={'newletter'}>
      <h2>
        Join the green revolution without commitment
      </h2>
      <div className={'newletter-single'}>
        If you are missing something and don't want to miss future promotions or our future products
      </div>
      <form className={'submit-group'} onSubmit={handleSubmit}>
        <input className={inputClass} type='email' name='email' id='email' ref={emailRef} />
        {showToast && (
          <Toast message={message} onClose={handleCloseToast} />
        )}
        <button className={'button-submit'} type='submit'>Submit</button>
      </form>
    </div>
  )
}
  
export default Newsletter
  