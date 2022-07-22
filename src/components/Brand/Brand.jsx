import React from 'react'
import './StyleBrand.css'
import img from '../../img/titulo.png'

export default function Brand({titulo}) {
  return (
    <div className='Brand'>
      <h1 className='Titulo'>{titulo}</h1>
      <img src={img} alt="" />
    </div>
    
  )
}
