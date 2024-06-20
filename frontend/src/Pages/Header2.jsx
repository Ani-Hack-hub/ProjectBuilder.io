import React from 'react';
import './index2.css';
function Header2(){
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
            <h1 id='name'>Project Name</h1>
            <h1 id='tech'>Technology</h1>
            <h1 id='app'>Application</h1>
            <h1 id='status'>Status</h1>
        </div>
    );
}
export default Header2;