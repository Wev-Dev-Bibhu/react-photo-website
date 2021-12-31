import React from 'react'
import img1 from './images/img1.webp'

function Collection() {
    return (
       <section id='img_collection'>
       <div className="heading">
           <span>Image Collection</span>
           <p>A Collection of Aryan's Work</p>
       </div>
       <div className="img_container">

           <div className="img_box">
               <div className="img_shade">+</div>
               <img src={img1} alt="MALE Pics" />
               <span>MALE</span>
           </div>
           <div className="img_box">
               <div className="img_shade">+</div>
               <img src={img1} alt="MALE Pics" />
               <span>MALE</span>
           </div>
           <div className="img_box">
               <div className="img_shade">+</div>
               <img src={img1} alt="MALE Pics" />
               <span>MALE</span>
           </div>
           <div className="img_box">
               <div className="img_shade">+</div>
               <img src={img1} alt="MALE Pics" />
               <span>MALE</span>
           </div>
           <div className="img_box">
               <div className="img_shade">+</div>
               <img src={img1} alt="MALE Pics" />
               <span>MALE</span>
           </div>
           <div className="img_box">
               <div className="img_shade">+</div>
               <img src={img1} alt="MALE Pics" />
               <span>MALE</span>
           </div>
          
       </div>
       </section>
    )
}

export default Collection
