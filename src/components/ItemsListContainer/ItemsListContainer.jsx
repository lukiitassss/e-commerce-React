import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "../gFetch/gFetch";
import { collection, doc, getDoc, getDocs, getFirestore, query,where } from 'firebase/firestore'
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading"


const ItemsListContainer= ()=>{

  const [productos,guardarProductos ]= useState([])
  const [loading,setLoading]= useState(true)
  const {categoriaId} = useParams()


  // useEffect(()=>{

  //   if (categoriaId) {
  //     gFetch
  //     .then(resolve=>guardarProductos(resolve.filter(prod=>prod.categoria==categoriaId)))
  //     .catch(reject =>console.log(reject))
  //     .finally(()=>setLoading(false))
  //   } else {
  //     gFetch
  //       .then(resolve=>guardarProductos(resolve))
  //       .catch(reject =>console.log(reject))
  //       .finally(()=>setLoading(false))
  //   }

  // },[categoriaId])

  useEffect(()=>{
    if (categoriaId){
      const db =getFirestore()
      const queryCollection = collection(db,'Productos')
      console.log(categoriaId)
      const queryColectionFilter = query(queryCollection,where('categoria','==',categoriaId))//limit(10)con eto digo el limite de resultados()seria el cuarto parametro//segundo parametro where//priomer parametro campo a controlar//comparacion
      getDocs(queryColectionFilter)//esto es para obtener VAAARIOS PRODUCTOS filtrados
      .then( resp => guardarProductos(resp.docs.map(prod =>({id:prod.id,...prod.data()}))))
      .catch(err=>console.log(err))  
      .finally(()=>setLoading(false))
  }else{
    const db =getFirestore()
    const queryCollection = collection(db,'Productos')//segundo parametro es la coleccion a donde voy a acceder
    getDocs(queryCollection )//esto es para obtener VAAARIOS PRODUCTOS
    .then( resp => guardarProductos(resp.docs.map(prod =>({id:prod.id,...prod.data()}))))
    .catch(err=>console.log(err))  
    .finally(()=>setLoading(false))
  }
  },[categoriaId])

    return(
      <>
        { loading ? 
          <Loading/>: 
          <ItemList productos={productos}/>
       }
      </>
    )
  }

export default ItemsListContainer;