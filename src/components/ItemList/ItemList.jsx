import React from 'react'
import {memo} from 'react'
import Item from '../Item/Item'
import "./StyleItemList.css"
// function ItemList({productos}) {
//   return (
//     <section className=' Productos' >
//         {productos.map((prod)=>(
//             <Item key={prod.id} producto={prod}/>)
//         )}
//     </section>
//   )
// }


const ItemList=memo(//de esta manera al haber cambios de estados en orden superior no se renderizan los items como hacia antes
  ({productos})=> {
    return (
      <section className={ productos.length > 4 ?  'Productos' : 'Prod' } >
          {productos.map((prod)=>(
              <Item key={prod.id} producto={prod}/>)
          )}
      </section>
    )
  },(prevprop,nextprop)=>prevprop.productos==nextprop.productos
)

export default ItemList