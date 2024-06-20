import React, { useState, useEffect } from "react";
import axios from 'axios'

function IndView({ binaryString, type }) {
  const [choice, setChoice] = useState({});

  useEffect(() => {
    const fetchChoice = async () => {
      axios.get(`http://localhost:5555/updateTechnologies/${binaryString}/${type}`)
      .then((res)=>{
        setChoice(res.data[0])
        console.log(res.data)
      })
      .catch((err)=>{console.log(err)})
    };

    fetchChoice();
  }, [binaryString, type]);

  console.log("Choice:", choice);
  return (
    <div className='ind-view'>
        <div className='img'></div>
        <table border={0}>
            <tbody>
                    <tr>
                        <td><b>NAME:</b></td>
                        <td>{choice.pname}</td>
                    </tr>
                    <tr>
                        <td><b>TECHNOLOGIES:</b></td>
                        <td>{choice.binaryString}</td>
                    </tr>
                    <tr>
                        <td><b>DESCRIPTION:</b></td>
                        <td>{choice.descr}</td>
                    </tr>
                    <tr>
                        <td><b>TYPE:</b></td>
                        <td>{choice.type_}</td>
                    </tr>
                   
            </tbody>
        </table>
    </div>
        );
}

export default IndView
