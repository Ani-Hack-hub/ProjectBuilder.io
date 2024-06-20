import React, { useState} from "react";
import axios from 'axios'

function Queryinp(){
  const mode=[];
  const handlemode=(e)=>{
    mode.push(e.target.value)
    console.log('mode '+mode)
  }
  const query = []
  const handleChange = (e)=>{
      query.push(e.target.value)
  }
  
  const handleQueries = ()=>{
    console.log("query" + query)
    console.log(mode)
  }

    return(
    <div className='ind-view'>
      <div class="lang"></div>

        <table border={0}>
          <tr>
            <td>
              <p><b>TYPE OF APP:</b></p>
            </td>
            <td>
              <p>
                <select>
                  <option onSelect={handlemode}>SELECT</option>
                  <option onClick={handlemode}>DESKTOP</option>
                  <option onSelect={handlemode}>WEB APP</option>
                  <option onSelect={handlemode}>MOBILE APP</option>
                </select>
              </p>
            </td>
          </tr>
          <tr class="tech">
            <td>
              <p><b>TECHNOLOGIES:</b></p>
            </td>
            <td>
              <div class="tech-checkboxes">
                <label> <input type="checkbox" onChange={handleChange} name="tech" value="AIML"/>AIML</label>
                <label> <input type="checkbox" onChange={handleChange} name="tech" value="PYTHON"/>PYTHON</label>
                <label> <input type="checkbox" onChange={handleChange} name="tech" value="JAVA"/>JAVA</label>
                <label> <input type="checkbox" onChange={handleChange} name="tech" value="IOT"/>IOT</label>
                <label> <input type="checkbox" onChange={handleChange} name="tech" value="DATA STRUCTURE"/>DATA STRUCTURE</label>
                <label> <input type="checkbox" onChange={handleChange} name="tech" value="JAVASCRIPT"/>JAVASCRIPT</label>
                <label> <input type="checkbox" onChange={handleChange} name="tech" value="ANGULAR"/>ANGULAR</label>
                <label> <input type="checkbox" onChange={handleChange} name="tech" value="MERN STACK"/>MERNSTACK</label>
                <label> <input type="checkbox" onChange={handleChange} name="tech" value="NODEJS"/>NODEJS</label>
                <label> <input type="checkbox" onChange={handleChange} name="tech" value="MYSQL"/>MYSQL</label>
                <label> <input type="checkbox" onChange={handleChange} name="tech" value="HTML"/>HTML</label>
                <label> <input type="checkbox" onChange={handleChange} name="tech" value="CSS"/>CSS</label>
                <label> <input type="checkbox" onChange={handleChange} name="tech" value="EXPRESS"/>EXPRESS</label>
                <label> <input type="checkbox" onChange={handleChange} name="tech" value="REACT"/>REACT</label>
                <label> <input type="checkbox" onChange={handleChange} name="tech" value="SPRING BOOT"/>SPRINGBOOT</label>
                <label> <input type="checkbox" onChange={handleChange} name="tech" value="POSTGRESQL"/>POSTGRESQL</label>
                <label> <input type="checkbox" onChange={handleChange} name="tech" value="MONGODB"/>MONGODB</label>
                </div>
          </td>
        </tr>
        <tr>
          <td></td>
          <td><button className="submit" onClick={handleQueries}><b>SUBMIT</b></button></td>
        </tr>
      </table>
    
    </div>
    );
}
export default Queryinp;
                            