import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import FireBase from './Firebase/config'
import './index.css'

FireBase()
ReactDOM.createRoot(document.getElementById('root')).render(
    <App />

)
