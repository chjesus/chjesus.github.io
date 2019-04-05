(function(){
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

    
    var animationConstruir = () => {
        let arrayTitles = ['Desarrollador Web','Desarrollador JavaScript'];
        let subTitle = document.getElementById('sub');
        let subTitleText = subTitle.textContent;
        let tamText = arrayTitles[0].length;
        let sliceCont = 0;

        let textInit = setInterval(() => {
            if(tamText > sliceCont-1){
                let word = arrayTitles[0];
                let visible = word.slice(0,sliceCont);
                sliceCont++;
                subTitle.textContent = visible + '|';
            }else{
                console.log("entro")
                clearInterval(textInit);
                let time = setTimeout(() => {
                    animationDelete(subTitle);
                },2000);
            }
        },70);
    }

    var animationDelete = (subTitle) => {
        let tamText = subTitle.textContent.length;
        console.log(tamText);
        
        let deleteInit = setInterval(()=>{
            if(tamText > -1){
                let word = subTitle.textContent;
                let visible = word.slice(0,tamText);
                tamText--;
                subTitle.textContent = visible;
            }else{
                clearInterval(deleteInit);
            }
        },70);
    }

    title.addEventListener('animationend',()=>{
        cont++;
        if(cont == 2){
            if(bool){
                setTimeout(() => subTitle.classList.add('sub--title--active'),200);
                setTimeout(() => animationConstruir(),300);
                setTimeout(() => {
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
            menuMobile.style.display = 'flex',
            validationAnimate = false
        )
        : (
            iconAnimate.classList.remove('bar--animation'),
            iconAnimate.classList.add('bar--animation--reverse'),
            menuMobile.style.display = 'none',
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