import React from 'react'
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../assets/img/itjuris_logo.svg'

import './style.css'

export default function Home (){
    return (
      <>
      <header className="header">    
       <nav>
         <div className="logo"><h4>ItJuris</h4></div>
         <input className="menu-btn" type="checkbox" id="menu-btn"/>
         <label className="menu-icon" htmlFor="menu-btn"><span className="nav-icon"></span></label>
         <ul className="menu">
           <li><Link className="links" href="">Home</Link></li>
           <li><Link className="links" href="">Sobre</Link></li>
           <li><Link className="links" href="">Serviços</Link></li>
           <li><Link className="links" href="">Contatos</Link></li>
         </ul>
       </nav>
      </header> 
      </> 
    )
}