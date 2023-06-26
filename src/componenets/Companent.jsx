import React from 'react'
import { odenisler } from '../pages/page components/productwidget'

function Companent() {
  return (
    <div>
      {odenisler.map((i,x)=>(
        <i className={i.icon}></i>
      )
        
      )}
    </div>
  )
}

export default Companent
