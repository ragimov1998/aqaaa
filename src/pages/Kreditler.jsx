import React from 'react'
import {data} from './page components/loan'
import { Link } from 'react-router-dom'


function Kreditler() {
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
                <h1> <span>Gündəlik </span> tələbat krediti</h1>
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
  <input className='telinp' type="tel" id="phone" name="phone" placeholder="+994-(XX)-XXX-XX-XX" pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}" required
  />
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