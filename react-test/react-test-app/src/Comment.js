import { render } from '@testing-library/react';
import { useState } from 'react';
import Like from './Like';
import Timer from './Timer';


export default function Comment() {
    
    const [message, setMessage] = useState('');
  
    const handleChange = (event) => {
      setMessage(event.target.value);
    };


    const handleClick = () => {

         render (
        <>
        <h3 class='message'>{message}</h3>
        <Timer/>
        <Like/> 
        </>

      )


    }
  
  
    return (
      <div class='box'>
        <input
          type="text"
          id="message"
          name="message"
          onChange={handleChange}
          value={message}
        />
        <button onClick={handleClick}>Post</button>
  
      </div>
    );
  }