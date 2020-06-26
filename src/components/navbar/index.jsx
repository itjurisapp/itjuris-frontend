import React from 'react'
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../assets/img/itjuris_logo.svg'

import './style.css'

export default function Home (){
    return (
    
        <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center">
      
            <Link href="index.html" 
            className="logo mr-auto">
              <img src={Logo}  alt="Logo" className="img-fluid"/> 
            </Link>
      
            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li className="active"><Link href="index.html">Home</Link></li>
                <li><Link href="#about">Sobre</Link></li>
                {/*<li><Link href="#services">Serviços</Link></li>
                <li><Link href="#portfolio">Portfolio</Link></li>
                <li><Link href="#team">Team</Link></li>
                <li class="drop-down"><Link href="">Drop Down</Link>
                  <ul>
                    <li><Link href="#">Drop Down 1</Link></li>
                    <li class="drop-down"><Link href="#">Deep Drop Down</Link>
                      <ul>
                        <li><Link href="#">Deep Drop Down 1</Link></li>
                        <li><Link href="#">Deep Drop Down 2</Link></li>
                        <li><Link href="#">Deep Drop Down 3</Link></li>
                        <li><Link href="#">Deep Drop Down 4</Link></li>
                        <li><Link href="#">Deep Drop Down 5</Link></li>
                      </ul>
                    </li>
                    <li><Link href="#">Drop Down 2</Link></li>
                    <li><Link href="#">Drop Down 3</Link></li>
                    <li><Link href="#">Drop Down 4</Link></li>
                  </ul>
                </li>
                <li><Link href="#contact">Contact</Link></li>*/}
      
              </ul>
            </nav>
      
          </div>
        </header>
    
    )
}