import React from 'react'
export default function Section1() {
    return (
        <>
        <section id='section1'>
        <div className="sectionback">
           <div className="branding">
               <h1>ARYAN</h1>
               <h4>&#8212; PHOTOGRAPHY &#8212;</h4>
           </div>
        </div>
        </section>
        <section id='section2'>
            <div className="container">
                <div className="container_box" id='box1'>
                </div>
                <div className="container_box" id='box2'>
                <div className="aboutme">
                    <h1>About Me</h1>
                    <div></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum vel totam f
                    ugit nulla aliquid cumque commodi magni excepturi. Volupt</p>
                </div>
                </div>
                <div className="container_box" id='box3'>
                <div className="contactForm">
                    <h2>Let's Talk</h2>
                    <form autoComplete='off'>  
                    <input type="text" name="name" placeholder='Name' id="" required />
                    <input type="text" name="name" placeholder='Email' id="" required />
                    <input type="text" name="name" placeholder='Subject' id="" required />
                    <textarea type="text" name="name" placeholder='Message' rows="6" required></textarea>
                    <button type="submit">Submit</button>
                    </form>
                </div>
                </div>
                <div className="container_box" id='box4'>

                </div>
            </div>
        </section>
        </>
    )
}
