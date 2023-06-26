import React from 'react'
import { Link } from 'react-router-dom'
import { xeber } from './page components/news'
import { useState } from 'react'


function Xeberler() {
  const [ data,setdata]=useState(xeber);
  return (
    <div className='news'>
       <div className="sablon">
          <h1 className="title">Xəbərlər</h1>

          <p className="ana_page">
          <Link to="/"><span>Ana səhifə</span> </Link>
             <i class="fa-solid fa-angles-right"></i>
            <span>Xəbərlər</span>
          </p>
      </div>

      <div className="news_container">
        {data.map((item,index)=>(
          <Link to={item.id}>   
          <div key={index} className="news_container_item">
            <div className='img'>
              <img src={item.img} alt="img" />
            </div>
            <h4>{item.title}</h4>
            <p>{item.vaxt}</p>
          </div>
          </Link>
       
        ))}

      </div>



    </div>
  )
}

export default Xeberler