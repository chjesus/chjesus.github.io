(function(){
    const $title = Array.prototype.slice.apply(document.getElementsByClassName('title'));
    const skillBars = document.querySelectorAll('.skill--bar')
    const $badgeItems = document.querySelectorAll('.badge');
    const $menuItems = document.querySelectorAll('.nav--a');
    const $btnCheck = document.querySelector('.navigation--check');
    const menuBar = document.getElementById('menu--bar');
    const iconAnimate = document.getElementById('icon');
    const menuMobile = document.getElementById('menu-mobile');
    const speedAnimation = 70;

    let validationAnimate = true; 
    let validationLetter = false;

    window.onload = () =>{
        setTimeout(() => $title.forEach(animationInit), 500);
    }

    var scroll = new SmoothScroll('a[href*="#"]',{
        speed: 1500,
        speedAsDuration: true,
        easing: 'easeInOutQuad'
    });


    window.addEventListener('scroll',()=>{
        skillBars.forEach(element => {
            const skillALt = (window.scrollY + window.innerHeight) - element.clientHeight;
            const isScroll = skillALt > element.offsetTop;
            if(isScroll){
                element.style.width = element.dataset.width + "%";
                const child = element.querySelector('.info')
                child.textContent = element.dataset.width + "%";
            }else{
                element.style.width = "20%";
            }
        });
    })
    
    $badgeItems.forEach($element => {
        $element.addEventListener('click',()=>{
            const $nextElement = $element.nextElementSibling;
            const $lastChild = $element.querySelector('.icon')
            console.log($lastChild)
            if($nextElement.style.maxHeight){
                $lastChild.classList.remove('icon-minus');
                $lastChild.classList.add('icon-plus')
                $nextElement.style.maxHeight = null;
            }else{
                $lastChild.classList.remove('icon-plus');
                $lastChild.classList.add('icon-minus');
                $nextElement.style.maxHeight = $nextElement.scrollHeight + "px";
            }
            
        })
    });
    
    $menuItems.forEach($element =>{
        $element.addEventListener('click',()=>{
            $btnCheck.checked = 0;
            console.log($element)
        })
    });

    var animationInit = (element,index) => {
        setTimeout(() => animationConstruir(element,element.dataset.name), 1000*index);
    }

    var animationConstruir = ($element,text) => {
        const arrayWord = ['Web Developer','Javascript Developer']
        const textLength = text.length;
        const word = text;
        let cont = 0;

        const textInit = setInterval(() => {
            if(textLength > cont-1){
                const showWord = word.slice(0,cont);
                cont++;
                $element.textContent = textLength > cont-1 ? showWord + '|': showWord;
            }else{
                clearInterval(textInit);
                if(text == "Independent "){
                    const $addSpan = document.createElement("span");
                    $addSpan.classList.add("title--animation");
                    $addSpan.setAttribute("id","title--animation")
                    $element.appendChild($addSpan);
                    const $spanTitle = document.getElementById('title--animation');
                    animationConstruir($spanTitle,arrayWord[0]);
                }
                if(text == arrayWord[0] || text == arrayWord[1]){
                    const position = validationLetter ? 0 : 1;
                    setTimeout(() => animationDelete($element,arrayWord[position]),1500);
                }
            }
        },speedAnimation);
    }

    var animationDelete = ($element,text) => {
        let textLength = $element.textContent.length;

        const deleteInit = setInterval(()=>{
            if(textLength >= 0){
                const word = $element.textContent;
                const showWord = word.slice(0,textLength);
                textLength--;
                $element.textContent = showWord + '|';
            }else{
                clearInterval(deleteInit);
                validationLetter = validationLetter ? false : true; 
                setTimeout(() => animationConstruir($element,text),1000);
            }
        },speedAnimation);
    }

    /*
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
*/
/*
    window.addEventListener('scroll',()=>{
        let skill = document.querySelector('.about--skill');
        console.log(skill.offsetTop);
//      console.log(window.scrollY);

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
    })*/
})();