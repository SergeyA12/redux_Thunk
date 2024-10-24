import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './store.js'
import {Provider} from "react-redux"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Users } from './features/users/users.jsx'


const routes = createBrowserRouter([
  {
    path:'',
    element:<Users/>
  },
  {
    path:'/add',
    element:<addUser/>
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store} router={routes}>
    <App />
    </Provider>
  </StrictMode>,
)
