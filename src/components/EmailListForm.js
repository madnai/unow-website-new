import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

const EmailListForm = () => {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    addToMailchimp(email)
    .then((data) => {
      if(data.result === 'success') {
          setMessage('Odezwiemy się do Ciebie w ciągu 24 godzin.')
      } else if (data.result === 'error' && data.msg.includes('already')) {
          setMessage('Już mamy twój email na liście.')
      } else {
          setMessage('Niepoprawny email.')
      }
    })
    .catch((error) => {
      console.log(error)
    });
  };

  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit} >
      <h1>Zostaw swój email jeśli chcesz!</h1>
       <div className="field" style={{display: 'inline-flex'}}>
           <div className="control">
                <input
                    class="input"
                    style={{}}
                    placeholder="Twój email"
                    name="email"
                    type="text"
                    onChange={handleEmailChange}
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