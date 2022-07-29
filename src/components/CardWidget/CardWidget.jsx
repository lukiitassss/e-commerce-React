import { useContext } from 'react'

import './StyleCard.css'

import img from "../../img/carritoDeCompra.svg"
import {CartContext} from '../../context/CartContext'

export default function CardWidget() {

  const [,,longitud] = useContext(CartContext)
  return (
    <article className='CartWidget'>
      <img src={img} />
      {longitud()> 0 ? 
                      longitud() > 9 ? 
                       <span className='Compras'>
                             +9     
                      </span>:
                      <span className='Compras'>
                          {longitud()}
                      </span>:
                      null}
      <span>Compras</span>
    </article>
  )
}
