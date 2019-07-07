(async function(){
    const $title = Array.prototype.slice.apply(document.getElementsByClassName('title'));
    const skillBars = document.querySelectorAll('.skill--bar')
    const $menuItems = document.querySelectorAll('.nav--a');
    const $btnCheck = document.querySelector('.navigation--check');
    const speedAnimation = 70;

    let validationLetter = false;

    window.onload = () =>{
        setTimeout(() => $title.forEach(animationInit), 500);
    }

    var certificateContainer = (date) => {
        const $certificate = document.getElementById('certificates');
        date.careers.forEach((careers)=>{
            const stringHTML = careersContainerTemplate(careers);
            const html = document.implementation.createHTMLDocument();
            html.body.innerHTML = stringHTML;
            $certificate.appendChild(html.body.firstChild);
        });
        const $careersContainer = document.querySelectorAll('.careers__container');
        $careersContainer.forEach((careers)=>{
            const stringHTML = `<div class="courses__container"></div>`;
            const html = document.implementation.createHTMLDocument();
            html.body.innerHTML = stringHTML;
            careers.appendChild(html.body.firstChild);
            const $coursesContainer = careers.querySelector('.courses__container');
            date.courses.forEach((courses)=>{
                if(courses.career === careers.dataset.careers){
                    const stringAux = coursesTemplate(courses)
                    const htmlAux = document.implementation.createHTMLDocument();
                    htmlAux.body.innerHTML = stringAux;
                    $coursesContainer.appendChild(htmlAux.body.firstChild)
                }
            })
        })
    }
    
    var coursesTemplate = (courses) =>{
        return (`<div class="courses">
                    <div class="courses--image"><img src="${courses.badge}" alt="${courses.title}" /></div>
                    <h3 class="courses--title">${courses.title}</h3>
                 </div>
        `);
    }

    var careersContainerTemplate = (careers) => {
       return (`<div class="careers__container" data-careers="${careers.title}">
                    <div class="badge">
                        <div class="badge--image"><img src="${careers.golden_achievement}" alt="${careers.title}" /></div>
                        <h3 class="badge--title">${careers.title}</h3>
                        <i class="icon icon-plus"></i>
                    </div>
                </div>`);
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
    
    var badgeClicks = ()=>{
        const $badgeItems = document.querySelectorAll('.badge');

        $badgeItems.forEach($element => {
            console.log("For: ",$element)
            $element.addEventListener('click',()=>{
                console.log("hola")
                const $nextElement = $element.nextElementSibling;
                const $lastChild = $element.querySelector('.icon')
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
    }
    
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

    async function getDate(url){
        const date = await fetch(url);
        const user = await date.json();
        
        return user.userData
    }

    const date = await getDate("https://platzi-user-api.jecsham.com/api/v1/getUserSummary/@chjesus");

    certificateContainer(date);
    badgeClicks();
})();