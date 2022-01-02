import React, { useState } from 'react'
import male from './images/ARYAN1.jpg'
import female from './images/female.jpg'
import wedding from './images/wedding.jpg'
import glamour from './images/glamour.jpg'
import boudoir from './images/BOUDOIR.jpg'
import fine_arts from './images/fine_arts.jpg'

function Male() {
    let value = "Collection";
    const [display, setDisplay] = useState(male)
    const previewMale = () => {
        setDisplay(male)
    }
    const previewFemale = () => {
        setDisplay(female)
    }
    const previewWedding = () => {
        setDisplay(wedding)
    }
    const previewGlamour = () => {
        setDisplay(glamour)
    }
    const previewBoudoir = () => {
        setDisplay(boudoir)
    }
    const previewFine_arts = () => {
        setDisplay(fine_arts)
    }
    const [preview, setPreview] = useState('')
    const showPrev = () => {
        setPreview('active');
    }
    const closePrev = () => {
        setPreview('');
    }
    return (
        <>
            <section className="img_gallery">
                <span>{value}</span>
                <div className="container">
                <div className={`container_left ${preview}`}>
                    <div className="img_box" onClick={showPrev}>
                        <img src={male} alt="Preview-image" onClick={previewMale} />
                    </div>
                    <div className="img_box" onClick={showPrev}>
                        <img src={female} alt="Preview-image" onClick={previewFemale} />
                    </div>
                    <div className="img_box" onClick={showPrev}>
                        <img src={wedding} alt="Preview-image" onClick={previewWedding} />
                    </div>
                    <div className="img_box" onClick={showPrev}>
                        <img src={glamour} alt="Preview-image" onClick={previewGlamour} />
                    </div>
                    <div className="img_box" onClick={showPrev}>
                        <img src={boudoir} alt="Preview-image" onClick={previewBoudoir} />
                    </div>
                    <div className="img_box" onClick={showPrev}>
                        <img src={fine_arts} alt="Preview-image" onClick={previewFine_arts} />
                    </div>
                </div>
                <div className={`container_right ${preview}`}>
                <div className="menu_btn" onClick={closePrev}>
                <div className="bar"></div>
                <div className="bar"></div>
                </div>
                    <div className="fullImgBox">
                        <img src={display} alt="Preview-image"/>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default Male
