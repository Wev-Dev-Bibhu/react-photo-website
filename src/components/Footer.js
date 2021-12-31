import React from 'react'

export default function Footer() {
    // Date Function
    const date =  new Date();
    let newDate = date.getFullYear();
    
    //javascript for scroll to top button
    // const scrollBtn = document.querySelector(".scrollToTop-btn");

    // window.addEventListener("scroll", function () {
    // scrollBtn.classList.toggle("active", window.scrollY > 500);
    // });

    // //javascript for scroll back to top on click scroll-to-top button
    // scrollBtn.addEventListener("click", () => {
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
    // });

    return (
       <footer>
        <div className="scrollToTop-btn">Top
        </div>

           <p>@ {newDate} Aryan  Photograhy. Proudly created by <a rel="noopener noreferrer" target="_blank" href="https://github.com/Wev-Dev-Bibhu">Bibhuti</a></p>
       </footer>
    )
}
