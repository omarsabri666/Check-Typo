const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')
    const year = document.querySelector('.date')
    const todayYear = new Date()
    
    year.textContent = todayYear.getFullYear()
    // const video = document.querySelector(".video");
    // video.addEventListener("DOMContentLoaded",()=>{
    // video.playbackRate = 2.0;

    // });

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
        if(mobileMenu.classList.contains("flex")){
                    document.body.style.overflow = "hidden";

        }else{ 
                        document.body.style.overflow = "auto";
        
        }
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)
