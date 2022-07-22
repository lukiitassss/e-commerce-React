import React from 'react'
import {memo} from 'react'
import { Link } from 'react-router-dom'
import "./StyleItem.css"
const Item=memo(
  ({producto})=> {

    return (
              <Link to={`/Detalle/${producto.id}`}>
                <article className='Card card'>
                        <p>{producto.nombre}</p> 
                        <img src={producto.img} alt="" />
                        <p>${producto.precio}</p>
                          <button>Ver Mas</button>
                </article>
              </Link>
    )
  }
)

export default Item