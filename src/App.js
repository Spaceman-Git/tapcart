import React from 'react';
import './App.css';
import tapcartLogo from './images/tapcart-logo.png';
import imgLogo from './images/img-logo.png';
import background from './images/background.jpg';
import forground from './images/forground.jpg';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import SecondPart from './SecondPart';


export default function App() {
  return (
    <>
    <div className="head">
    <header>
    <img className="logo" src={tapcartLogo} alt="logo"/>
    <nav>
      <ul className="nav__links">
        <li><a href="#">{element}</a></li>
        <li><a href="#">Account</a></li>
      </ul>
    </nav>
    </header>
    <div className="container-1">
        <div><img className="img-logo" src={imgLogo} alt="img-logo"/></div>
        <div>Money Clothing</div>
        <div>TRIAL EXPIREDS ●</div>
        <div><button className="btn-top-1">PREVIEW YOUR APP</button></div>
        <div><button className="btn-top-2">UPGRADE NOW →</button></div>
    </div>
    <div className='guide'>Guide</div>
    </div>
    <div className='container-2'>
        <div className='bg'>
          <img src={background}></img>
        </div>
        <div className='fg'>
          <img src={forground}></img>
          <h1>Your trial has expired</h1>
          <p>Two ways to keep enjoying Tapcart:</p>
          <div className='btns'>
            <button className='btn btn-1' onClick={<SecondPart />}>UPGRADE NOW</button>
            <span className='or'>OR</span>
            <button className='btn btn-2'>CONTACT US →</button>
            
          </div>
        </div>
    </div>
    </>
  )
}


{/* <FontAwesomeIcon icon="far fa-search" style={{color: "#555555",}} /> */}