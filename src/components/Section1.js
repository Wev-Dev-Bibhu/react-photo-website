import React, {useState} from 'react'
export default function Section1() {

        const [user, setUser] = useState({
            name: "", email: "", subject: "", message: ""
        });
        let name, value;
        const handleInputs = (e) => {
            name = e.target.name;
            value = e.target.value;
            setUser({...user, [name]:value});
        }
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
                    <input type="text" name="name" placeholder='Name' id="" required value={user.name} onChange={handleInputs} />
                    <input type="text" name="email" placeholder='Email' id="" required value={user.email} onChange={handleInputs} />
                    <input type="text" name="subject" placeholder='Subject' id="" required value={user.subject} onChange={handleInputs} />
                    <textarea type="text" name="message" placeholder='Message' rows="6" required value={user.message} onChange={handleInputs}></textarea>
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
