import Brand from '../Brand/Brand'
import CardWidget from '../CardWidget/CardWidget'
import './StyleNavBar.css'
import Categorias from '../Categorias/Categorias'
import { Link, NavLink } from 'react-router-dom'

{/*Aca vamos a ver 2 etiquetas importantes
LINK y NAVLINK 

NAVLINK: se usa especialmente para los botones de nuestro navbar
LINK: se usa para cualquier otra seccion se que quiera redirecc
 */}
export default function NavBar() {
  return (
    <nav className='NavBar'>
        <NavLink to ='/' className={({isActive})=> isActive ? 'Menu': 'Activada'}>
          <Brand titulo='SalchiShop'/>
        </NavLink>
        <NavLink to='/Categoria/Animales'className={({isActive})=> isActive ? 'Activada': 'Menu'}>Animales</NavLink>
        <NavLink to= '/Categoria/Alimentos' className={({isActive})=> isActive ? 'Activada': 'Menu'}>Alimentos</NavLink>
        <NavLink to='/Categoria/Productos' className={({isActive})=> isActive ? 'Activada': 'Menu'}>Productos</NavLink>
        <Link to='Cart'>
          <CardWidget/>
        </Link>
    </nav>
    
  )
}
