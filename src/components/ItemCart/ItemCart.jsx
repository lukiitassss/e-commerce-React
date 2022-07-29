import React from 'react'
import './StyleItemCart.css'

function ItemCart({producto, remove}) {
  return (
    <article className='Articulo'>
        <img src={producto.item.img} alt="" />
        <span className='Nombre'>{producto.item.nombre}</span>
        <div className='SubTotal'>
          <span>Cantidad: {producto.quantity}</span>
          <span>SubTotal: $ {producto.item.precio*producto.quantity}</span>
        </div>
       {/*  //aca va el control de la cantidad en comparacion del stock*/}
        <button onClick={()=>(remove(producto))} className="Quitar" >x</button>
    </article>
  )
}

export default ItemCart