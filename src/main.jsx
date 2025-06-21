import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';

// import{Practices} from './Practices.jsx'
import {App} from './App'
// import Profile from "./components/Profile.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
