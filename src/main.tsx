import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import HomeComponent from './conponents/home.tsx'

createRoot(document.getElementById('root')!).render(
    <HomeComponent/>
)
