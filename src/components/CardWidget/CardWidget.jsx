import { useContext } from 'react'
import img from "../../img/carritoDeCompra.svg"
import './StyleCard.css'
import {CartContext} from '../../context/CartContext'

export default function CardWidget() {

  const [,,longitud] = useContext(CartContext)
  return (
    <article className='cartWidget'>
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
