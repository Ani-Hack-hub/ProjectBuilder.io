import React from 'react';
import './index.css';
function ThankYou({uid}){
    return(
        <div>
            
            <h1>Thank you for choosing our Project</h1>
            <h2>When are you planning to Finish it:</h2>
            <input type="date" className='date' />   
            <button type="submit" className='button'>Submit</button>   
        </div>
    );
}
export default ThankYou;