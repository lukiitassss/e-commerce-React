import React,{createContext,useState} from 'react'

export const CartContext = createContext()

const estadoInicial = []



//3- debemos crear el componente provide
export  const CartProvider = ({children})=>{
    const [productos,setProductos] = useState(estadoInicial)
    const [long,setLong] =useState(0)

    const longitud = ()=>{//este nos devolvera la cantidad de elementos que tenemos en el carrito
       return long
    }

    const ubicacion =id=>{//con esta funcion podremos saber la ubicacion del elemento q buscamos
        return(
            productos.find(producto => producto.item.id==id)
        )
    }



    const limpiar =()=>{//inicializamos el carrito
        setProductos(estadoInicial)
        setLong(0)
    }

    const posicion=(prod)=>{
        return(productos.indexOf(prod))
    }

    const isInCart=(id) =>{//pasandole un id podremos ver si esta en el carrito

        return productos.find(el => el.item.id == id ) ? true : false;
    }

    const addItem = (producto,cantidad)=>{//con esta funcion agregamos productos al carrito
        if(!isInCart(producto.id)){
            const prod = {
                item:producto,
                quantity:cantidad
            }
            setProductos([...productos,prod])
            setLong(long + cantidad)

        }
        else{
            const ubi = ubicacion(producto.id)
            const stock= ubi.quantity+cantidad

            if (stock<=ubi.item.stock) {
                ubi.quantity += cantidad
                setProductos(productos)
                setLong(long + cantidad)
            } 
            
             
        }

       // setProductos(productos.push({item:producto,quantity:cantidad}))
 
    }

    const quitarItem= (prod) =>{
        if (isInCart(prod.item.id)) {
            const ubicacion = posicion(prod)
            productos.splice(ubicacion,1)
            setProductos(productos)
            setLong(long - prod.quantity)
            return true
        }
        else{
            return false
        }
    }
    


    //4-devemos retornar este componente
    return(
        //si quiero pasar una props se debe llamar value
        <CartContext.Provider value ={[productos,addItem,longitud,quitarItem,limpiar]}>
            {/* 5- aca  va a pasarse props.children o bien childrens y seran todos lo que yo envuelva*/}
            {children}
        </CartContext.Provider>
    )
}