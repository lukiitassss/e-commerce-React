import React from 'react'
import { useContext,useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import {addDoc,collection,getFirestore} from 'firebase/firestore'


import './StyleCart.css'

import {CartContext} from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart'

function Cart() {
  const [productos,,longitud,quitarItem,limpiar] =useContext(CartContext)
  const [total,guardarTotal]=useState(0)
  const[nombre,guardarNombre]=useState('')
  const[telefono,guardarTelefono]=useState('')
  const[email,guardarEmail]=useState('')
  const [visible,guardarVisible]=useState(true)
  const [numeroOrden,guardarOrden] =useState(null)
  const [cargargandoOrden,guardarCargandoOrden]=useState(true)


  const quitar = (id )=>{
    quitarItem(id)
  }

  const recuperarEmail=(e)=>{
    guardarEmail(e.target.value)
  }

  const recuperarNombre=(e)=>{
    guardarNombre(e.target.value)
  }

  const recuperarTelefono=(e)=>{
    guardarTelefono(e.target.value)
  }


  const generarOrden=(e)=>{
    e.preventDefault()
    guardarCargandoOrden(true)
    const orden={}
      orden.datos={
        nombre,
        telefono,
        email
      }
      orden.productos= productos.map(prod =>{
        const id=prod.item.id
        const precio = prod.item.precio
        const titulo = prod.item.nombre
        return{id,precio,titulo}
      })
      orden.total=total
      guardarVisible(false)
      //agregar a la base de datos
      const db=getFirestore()
      const queryInsertarCollection=collection(db,'Ordenes')
      addDoc(queryInsertarCollection,orden)
      .then( resp => {guardarOrden(resp.id)
        guardarCargandoOrden(false)})        
      .catch(err=>console.log(err))
     guardarEmail('')
     guardarNombre('')
     guardarTelefono('')
     
  }

  useEffect(()=>{
    let suma=0
    productos.forEach(prod => {
      suma+=prod.item.precio*prod.quantity
    });
    guardarTotal(suma)
  },[longitud])

  

  return (
    productos.length<1 ?  
    <div className='Vacio'>
        <span>Aun no se agrego nada al carrito</span>
        <Link to='/'><button className='IrAHome'>Buscar que Comprar :)</button></Link>
        
    </div> : 
    <div className={productos.length>=4 ? 'Cart' : 'Carr'}>
      <section className='ProductosCarrito'>
      {
        productos.map(prod =>(
          <ItemCart key={prod.item.id} producto={prod} remove={quitar} />
        )
        )
      }
      <div className='TotalLimpiar'>
        <span>Total:{total}</span>
        <button onClick={limpiar} className='Limpiar'>Vaciar Carrito</button>
      </div>
      </section>
      {visible ? <form className='Orden' onSubmit={generarOrden}>
        <span>Completar Orden de Compra</span>
        <input type="text" placeholder='Nombre' id='Nombre' onChange={recuperarNombre} value={nombre} required/>
        <input type="text" placeholder='Telefono' id='Telefono' onChange={recuperarTelefono} value={telefono} required/>
        <input type="text" placeholder='Email' id='Email' onChange={recuperarEmail} value={email} required/>
        <button>Generar Orden</button>
      </form> : 
      cargargandoOrden ? 
        <div className='CargandoOrden'>
          <div class="loader-wrapper">
            <div class="loader">
                <div class="loader loader-inner">
                  
                </div>
              </div>
          </div>
        </div>
       : <span className='NumeroOrden'>Tu Numero de Orden es: {numeroOrden}</span> }
    </div>
  )
}

export default Cart