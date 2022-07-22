
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer'
import NavBar from './components/NavBar/NavBar';

import './App.css'
import Cart from './components/Cart/Cart';
import Error from './components/Error/Error';
import {CartProvider} from './context/CartContext'
function App() {
  
  
  return (
    <CartProvider>

      <BrowserRouter>{/*con esta libreria le damos el contexto para q nuestros componenetes usen todas las funciones que tiene la libreria */}
          <div className="App">
            <NavBar/>
            <Routes >{/*aca ponemos todos los componentes que van a tener una vista individual . como el navbar siempre es igual no se incluye
                            en el path va la ruta que va a estar  ESCUCHANDO y cuando en la url se escriba esa ruta
                            nos mostrara el elemento*/}
              <Route index path='/' element={<ItemsListContainer/>}  />{/*Aca lo que pasa es que se va a estar escuchando la direccion que figura en el path   
                                                                y cuando aparezaca en el navegador se renderiza el elemento q le pasamos */}
              <Route path='/Categoria/:categoriaId' element={<ItemsListContainer/>}></Route>
              
              
              <Route path='/Detalle/:id' element={<ItemDetailContainer/>}/>{/*aca me voy cuando se clikea en una card */}
              <Route path='Cart' element={<Cart/>}/>{/*aca me voy cuando se aprieta el carrito */}
              <Route path='*' element={<Error/>}/>
            </Routes>
          </div>
      </BrowserRouter>
    </CartProvider>
 
  )
}

export default App
