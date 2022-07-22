import React from 'react'
import { useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { gFetch } from '../components/gFetch/gFetch'
import Loading from '../components/Loading/Loading'
import {CartContext} from '../context/CartContext'


import './StyleDetail.css'
import ItemCount from './ItemCount'
import { useContext } from 'react'

function ItemDetailContainer() {
  const {id} = useParams()//parametro de url
  const [producto,guardarProducto] = useState(null);
  const [loading,setLoading]= useState(true);
  const [compra,setCompra] =useState(false);
  const [productos,addItem,longitud] =useContext(CartContext)

  // useEffect(()=>{
  // gFetch
  //   .then(resolve=>guardarProducto(resolve.find(prod => prod.id ==id)))
  //   .catch(reject =>console.log(reject))
  //   .finally(()=>setLoading(handleBool))
  // },[])

  useEffect(()=>{
    const db =getFirestore()
    const queryProducto = doc(db,'Productos',id)//segundo parametro es la coleccion a donde voy a acceder//tercer parametro es el ID
    getDoc(queryProducto)//esto es para obtener solo 1 parametro
    .then( resp => guardarProducto({id:resp.id,...resp.data()}))
    .catch(err=>console.log(err))  
    .finally(()=>setLoading(handleBool))
  },[])

  
  const handleBool = ()=>{
    setLoading(!loading)
  }
  
  const comprar = (cantidad )=>{
    addItem(producto,cantidad)
    setCompra(true)
  }
  console.log(productos);


  return(
      <>
        { loading ? 
          <Loading/>: 
          <div className='Detalle'>
            {<>
              <h2 className='Nombre'>{producto.nombre}</h2>
              <img src={producto.img} alt=""  className='Imagen'/>
              <p className='Precio'>Precio: ${producto.precio}</p>
              {producto.stock>0 ? 
              <p style={{color:'green'} } className='Stock'>Stock Disponiblle:{producto.stock}</p> :
              <p style={{color:'red'}} className='Stock'>Sin Stock Disponible</p>         
            }
            
            {
            compra ? <div className='Compra'>
                    <Link to = '/' ><button>seguir</button> </Link>
                    <Link to = '/Cart' ><button>carrito</button> </Link>
                    </div>: 
                    producto.stock > 0 ?
                       <ItemCount stock={producto.stock} add={comprar} className='Formulario'/> : 
                       <div className='Compra'>
                        <Link to = '/' ><button>seguir</button> </Link>
                        <Link to = '/Cart' ><button>carrito</button> </Link>
                       </div>
            }
              <p className='Descripcion'>Descripcion{`
                ${producto.descripcion}`}</p>
            </>
            }
          </div>
       }
      </>
    )
  }

export default ItemDetailContainer