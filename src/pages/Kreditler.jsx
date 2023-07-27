import React, { useState } from 'react'
import {data} from './page components/loan'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'


function Kreditler() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);

  const validatePhoneNumber = (input) => {
    // const phoneRegex = /^(\+994|994|0)(50|51|55|70|77)(\d{7}|\d{2}-\d{3}-\d{2}-\d{2})$/;
    const phoneRegex = /^\+994-(5[015]|70|77|99)-\d{3}-\d{2}-\d{2}$/;
    return phoneRegex.test(input);
  };

  const handlePhoneNumberChange = (e) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue)) {
      setPhoneNumber(inputValue);
      setIsValidPhoneNumber(validatePhoneNumber(inputValue));
    }
  };
  useEffect(()=>{
window.scrollTo(0,0)
  },[])
  return (
     data.map((item)=>(
        <div className="loan">
          <div className="sablon">
          <h1 className="title">Kredit</h1>

          <p className="ana_page">
          <Link to="/"><span>Ana səhifə</span> </Link>
             <i class="fa-solid fa-angles-right"></i>
            <span>Kredit</span>
          </p>
      </div>
          
          <div className="loan_container">

          <div className="loan_container_contain">

            <div className="top">
              <div className="left">
                <h1> <span>Nağd</span>pul krediti</h1>
              <p>{item.about}</p>
              <table>
                <tr>
              <td className='answer'>{item.answer}</td>
              <td className='answer'>{item.answer2}</td>
              <td className='answer'>{item.answer3}</td>
              </tr>

            <tr>
              <td className='what'>{item.what}</td>
              <td className='what'>{item.what2}</td>
              <td className='what'>{item.what3}</td>
            </tr>
              </table>
              
              </div>
              <div className="right">
                <img src={item.img} alt="img" />
              </div>
            </div>

            <div className="bottom">
<h1>Krediti onlayn dərhal əldə et!</h1>
<input
        className="telinp"
        type="tel"
        id="phone"
        name="phone"
        placeholder="+994-(XX)-XXX-XX-XX"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        required
      />
      {isValidPhoneNumber ? (
        <p>Valid phone number!</p>
      ) : (
        <p>Invalid phone number. Please enter in the format '+994-90-234-23-33'.</p>
      )}
  {/* <input className='telinp' type="tel" id="phone" name="phone" placeholder="+994-(XX)-XXX-XX-XX" pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}" required
  /> */}
  <br />
  <input className='btn' type="submit" value="Davam et"></input>
            </div>

          </div>

          <div className="loan_container_bottom">
                <div>
        <h1>{item.title}</h1>
          <div className='list'>
            <div className='left'>
            <li>{item.li1}</li>
            <li>{item.li2}</li>
            <li>{item.li3}</li>
          </div>
          <div className='right'>
            <li>{item.li4}</li>
            <li>{item.li5}</li>
            <li>{item.li6}</li>
          </div>
          </div>
        <p>{item.by}</p>
               </div>
          </div>
            </div>
        </div>

      ))
  )
}

export default Kreditler