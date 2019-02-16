(function(){
    const listBlocks = Array.prototype.slice.apply(document.querySelectorAll('.active'));
    const menuDesktop = document.getElementById('menu-desktop');
    const menuMobile = document.getElementById('menu-mobile');
    const menuIcon = document.querySelector('.menu--bar');
    const modalMobile = document.querySelector('.menu--mobile');

    menuDesktop.addEventListener('click', event => menuList(event,'.menu--title',false));
    menuIcon.addEventListener('click', () => modalMobile.classList.toggle('active'));
    menuMobile.addEventListener('click',event => menuList(event,'.menu--mobile',true));

    function menuList(event,menuType,validation){
        const liList = Array.prototype.slice.apply(document.querySelectorAll(menuType+' .menu--items'));
        const aList = Array.prototype.slice.apply(document.querySelectorAll(menuType+' .menu--item'));

        if(event.target.classList.contains('menu--item')) containsConditional(aList,validation)
        else if(event.target.classList.contains('menu--items')) containsConditional(liList,validation)
    }

    function containsConditional(list,validation){
        if(validation){
            activeStyle(list);
            modalMobile.classList.toggle('active');
        }else activeStyle(list);
    }

    function activeStyle(listMenu){
        const number = listMenu.indexOf(event.target);
        listBlocks.map(list => list.style.display="none");

        if(number!=1) listBlocks[number].style.display="block";
        else listBlocks[number].style.display="flex";

        if(number!=0) menuIcon.classList.add('active--bar');
        else menuIcon.classList.remove('active--bar');
    }
})();