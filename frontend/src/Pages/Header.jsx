import React from 'react';
import './index.css';
function Header({uid}){
    return(
        <div>
            <nav>
                <div>
                    <a href="">
                        LOGO
                    </a>
                </div>
                <ul>
                    <li><a href="">HOME</a></li>
                    <li><a href="">QUERY</a></li>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">USER PROFILE</a></li>
                </ul> 
            </nav>
            <h1>Thank you for choosing our Project</h1>
            <h2>When are you planning to Finish it:</h2>
            <input type="date" className='date' />   
            <button type="submit" className='button'>Submit</button>   
        </div>
    );
}
export default Header;