(function(){
    const menuDesktop = document.getElementById('menu-desktop');
    const menuMobile = document.getElementById('menu-mobile');
    const menuIcon = document.querySelector('.menu--bar');
    const modalMobile = document.querySelector('.menu--mobile');
    const title = document.getElementById('title');
    const subTitle = document.querySelector('.sub--title');
    let bool = true;
    let cont = 0;

    AOS.init();
    
    var scroll = new SmoothScroll('a[href*="#"]',{
        speed: 1500,
        speedAsDuration: true,
        easing: 'easeInOutQuad'
    });
    
    title.addEventListener('animationend',()=>{
        cont++;
        // subTitle.classList.add('sub--title--active')
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

        // let textInit = setTimeout(() => subTitle.classList.add('sub--title--active'),200);
        // let textEnd = setTimeout(()=> subTitle.classList.remove('sub--title--active'),1000);
    });
    
    window.addEventListener('scroll',()=>{
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
/*
    menuDesktop.addEventListener('click', event => menuList(event,'.menu--title',false));
    menuIcon.addEventListener('click', () => modalMobile.classList.toggle('active'));
    menuMobile.addEventListener('click',event => menuList(event,'.menu--mobile',true));

    function menuList(event,menuType,validation){
        const section = Array.prototype.slice.apply(document.querySelectorAll('.section'));
        const menuList = Array.prototype.slice.apply(document.querySelectorAll(menuType+' .menu--item'));
        if(event.target.classList.contains('menu--item')){
            const value = menuList.indexOf(event.target);
            section.map(sect => sect.classList.remove('active'));
            section[value].classList.add('active');
            value !=0 ? (
                menuIcon.classList.add('active--bar'),
                subTitle.classList.remove('sub--title--active')
                ) : menuIcon.classList.remove('active--bar');
            if(validation) modalMobile.classList.toggle('active')
        }
    }*/

})();