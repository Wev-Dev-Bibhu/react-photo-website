import React from 'react'
import male from './images/img1.webp'
import female from './images/female.jpg'
import wedding from './images/wedding.jpg'
import glamour from './images/glamour.jpg'
import boudoir from './images/BOUDOIR.jpg'
import fine_arts from './images/fine_arts.jpg'
import { NavLink } from 'react-router-dom'

function Collection() {
    
    return (
       <section id='img_collection'>
       <div className="heading">
           <span>Image Collection</span>
           <p>A Collection of Aryan's Work</p>
       </div>
       <div className="img_container">

            <NavLink to='/male'> 
            <div className="img_box">
                <div className="img_shade">+</div>
                <img src={male} alt="MALE Pics" />
                <span>MALE</span>
            </div>
           </NavLink>
           <NavLink to='/male'>
           <div className="img_box">
               <div className="img_shade">+</div>
               <img src={female} alt="MALE Pics" />
               <span>FEMALE</span>
           </div>
           </NavLink>
           <NavLink to='/male'>
           <div className="img_box">
               <div className="img_shade">+</div>
               <img src={wedding} alt="MALE Pics" />
               <span>WEDDINGS</span>
           </div>
           </NavLink>
           <NavLink to='/male'>
           <div className="img_box">
               <div className="img_shade">+</div>
               <img src={glamour} alt="MALE Pics" />
               <span>GLAMOUR</span>
           </div>
           </NavLink>
           <NavLink to='/male'>
           <div className="img_box">
               <div className="img_shade">+</div>
               <img src={boudoir} alt="MALE Pics" />
               <span>BOUDIOR</span>
           </div>
           </NavLink>
           <NavLink to='/male'>
           <div className="img_box">
               <div className="img_shade">+</div>
               <img src={fine_arts} alt="MALE Pics" />
               <span>FINE ARTS</span>
           </div>
           </NavLink>
          
       </div>
       </section>
    )
}

export default Collection
