const links = document.getElementById('links');
const menu = document.getElementById('menu');
menu.onclick = function(){
    links.classList.toggle('open');
    if(links.classList.contains('open')){
        menu.src = "images/close.png";
    }else{
        menu.src = "images/menu.png";
    }

}