//Let's Create the JavaScript Part. 

const overlay = document.getElementById('overlay');
const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const stopScrolling = document.getElementById('stop-scrolling');



closeMenu.style.display = 'none';

document.getElementById('open-menu').addEventListener('click', function() {
    overlay.classList.add('show-menu');
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
    stopScrolling.style.overflow = 'hidden';
});

document.getElementById('close-menu').addEventListener('click', function(){
    hideMenu()
})

document.getElementById('close-menu-link').addEventListener('click', function(){
    hideMenu()
})

document.getElementById('close-menu-link1').addEventListener('click', function(){
    hideMenu()
})

document.getElementById('close-menu-link2').addEventListener('click', function(){
    hideMenu()
})

document.getElementById('close-menu-link3').addEventListener('click', function(){
    hideMenu()
})

function hideMenu(){
    overlay.classList.remove('show-menu')
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
    stopScrolling.style.overflow = 'visible';
}