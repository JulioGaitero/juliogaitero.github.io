(function(){
    const openButton = document.querySelector('.botonmenu');
    const menu = document.querySelector('.contenedorenlaces');
    const closeMenu = document.querySelector('.menucerrar');
    const enlace = document.queryCommandValue('.enlace');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('muestramenu');
        
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('muestramenu');
    });

})();



(function(){
    
    const sliders = [...document.querySelectorAll('.responsabilidadescrip')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const responsabilidadID = document.querySelector('.responsabilidadmostrar').dataset.id;
        value = Number(responsabilidadID);
        value+= add;


        sliders[Number(responsabilidadID)-1].classList.remove('responsabilidadmostrar');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('responsabilidadmostrar');

    }

})();


var scrollToTop = (function() {
    var scrollButton = document.getElementById("scrollToTop")
        showButton = scrollButton.dataset.upshow || 600,
        scrollSpeed = scrollButton.dataset.upspeed || 1000;
    function scrollTop(b) {
        function a(d) {
            c += Math.PI / (b / (d - e));
            c >= Math.PI && window.scrollTo(0, 0);
            0 !== window.scrollY && (window.scrollTo(0, Math.round(scrollTime + scrollTime * Math.cos(c))), e = d, window.requestAnimationFrame(a))
        }
        var scrollTime = window.scrollY / 2,
            c = 0,
            e = performance.now();
        window.requestAnimationFrame(a)
    }
    var scrollPosition = window.scrollY;
    window.addEventListener("scroll", function() {
        scrollPosition = window.scrollY;
        showButton < scrollPosition ? scrollButton.classList.add("visible") : scrollButton.classList.remove("visible")
    });
    scrollButton.onclick = function() {
        scrollTop(scrollSpeed)
    }
})();