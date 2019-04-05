(function(){
    const menuDesktop = document.getElementById('menu-desktop');
    const menuIcon = document.querySelector('.menu--bar');
    const modalMobile = document.querySelector('.menu--mobile');
    const title = document.getElementById('title');
    const subTitle = document.querySelector('.sub--title');
    const menuBar = document.getElementById('menu--bar');
    const iconAnimate = document.getElementById('icon');
    const menuMobile = document.getElementById('menu-mobile');


    let bool = true;
    let cont = 0;
    let validationAnimate = true; 

    AOS.init();
    
    var scroll = new SmoothScroll('a[href*="#"]',{
        speed: 1500,
        speedAsDuration: true,
        easing: 'easeInOutQuad'
    });
    
    title.addEventListener('animationend',()=>{
        cont++;
        if(cont == 2){
            if(bool){
                setTimeout(() => subTitle.classList.add('sub--title--active'),200);
                setTimeout(()=> {
                    subTitle.classList.remove('sub--title--active')
                    title.classList.remove('title--animate');
                    title.classList.add('title--animate--reverse')
                },5000)
                bool = false;
            }else{
                title.classList.remove('title--animate--reverse');
                title.classList.add('title--animate');
                bool = true;
            }
            cont = 0;
        }
    });
    
    menuBar.addEventListener('click',()=>{
        validationAnimate ? (
            iconAnimate.classList.remove('bar--animation--reverse'),
            iconAnimate.classList.add('bar--animation'),
            //menuMobile.style.visibility = 'visible',
            menuMobile.style.display = 'flex',
            validationAnimate = false
        )
        : (
            menuMobile.style.display = 'none',
            //menuMobile.style.transitionDelay = '.3s',
            //menuMobile.style.visibility = 'hidden',
            iconAnimate.classList.remove('bar--animation'),
            iconAnimate.classList.add('bar--animation--reverse'),
            validationAnimate = true
        );

    })

    window.addEventListener('scroll',()=>{
        let skill = document.querySelector('.about--skill');
        console.log(skill.offsetTop);
//        console.log(window.scrollY);

        let menu = document.getElementById('nav');
        let scrollValue = document.documentElement.scrollTop;

        scrollValue > 0 ? (
            menu.style.backgroundColor = "#151515",
            menu.style.padding = "1.2em 0",
            menu.style.transition = ".3s linear"
        ) : (
            menu.style.backgroundColor = "transparent",
            menu.style.padding = "1em 0",
            menu.style.transition = ".3s linear"
        )
    })
})();