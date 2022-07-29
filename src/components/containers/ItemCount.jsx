import React,{useState} from 'react'
//context


import './StyleCount.css'



function ItemCount({stock, add}) {
    const [cantidad,guardarCantidad] = useState(1);



    const aumentar=()=>{
        cantidad < stock ? guardarCantidad(cantidad+1) : guardarCantidad(stock)  
    }

    const disminuir = ()=>{
        cantidad==1 ? guardarCantidad(1) : guardarCantidad(cantidad -1)

    }



  return (
 
     <div className='Formulario'>
        <button className='Menos'onClick={disminuir}>-</button>
        <p className='Cantidad'>{cantidad}</p>     
        <button className='Mas' onClick={aumentar}>+</button>
        <button className='Comprar' onClick={()=>(add(cantidad)) }>Comprar</button>
    </div>
  )
}

export default ItemCount