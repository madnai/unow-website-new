import React, { useState } from 'react';

const EmailListForm = () => {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
  };

  return (
    <form name="contact" method="post" method="POST" data-netlify="true" >
      <h1>Zostaw swój email jeśli chcesz!</h1>
       <div className="field" style={{display: 'inline-flex'}}>
           <div className="control">
                <input
                    class="input"
                    style={{}}
                    placeholder="Twój email"
                    name="email"
                    type="email"
                />
           </div>
           <button class="button is-black" 
                style={{backgroundColor: 'black', color: 'white'}} 
                type="submit">Chcę</button>
            
      </div>
      <p style={{color: '#d8002a'}}>{message}</p>
    </form>
  );
};

export default EmailListForm;