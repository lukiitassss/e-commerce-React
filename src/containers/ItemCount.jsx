import React,{useState} from 'react'
//context


import './StyleCount.css'



function ItemCount({stock, add}) {
    const [cantidad,setCantidad] = useState(1);



    const aumentar=()=>{
        cantidad < stock ? setCantidad(cantidad+1) : setCantidad(stock)  
    }

    const disminuir = ()=>{
        cantidad==1 ? setCantidad(1) : setCantidad(cantidad -1)

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