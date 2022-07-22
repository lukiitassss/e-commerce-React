import React from 'react'
import './StyleCategorias.css'
export default function Categotias({nombre,direccion}) {
  return (
    <li>
        <a href={direccion}>{nombre}</a>
    </li>
  )
}
