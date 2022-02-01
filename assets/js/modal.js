function init(){
    let modalContainer = document.getElementById("modal-container");
    
    if(document.getElementById("img1")){
        let img1, modal1, modalCloser1;

        img1 = document.getElementById("img1");
        modal1 = document.getElementById("modal1");
        modalCloser1 = document.getElementById("modal1-closer");
        img1.onclick = function(){
            modalContainer.setAttribute("style", "display: flex;");
            modal1.setAttribute("style", "display: block;");
            disableScroll();
        };
        modalCloser1.onclick = function(){
            modal1.setAttribute("style", "display: none;");
            modalContainer.setAttribute("style", "display: none;");
            enableScroll();
        };
    }
    if(document.getElementById("img2")){
        let img2, modal2, modalCloser2;

        img2 = document.getElementById("img2");
        modal2 = document.getElementById("modal2");
        modalCloser2 = document.getElementById("modal2-closer");
        img2.onclick = function(){
            modalContainer.setAttribute("style", "display: flex;");
            modal2.setAttribute("style", "display: block;");
            disableScroll();
        };
        modalCloser2.onclick = function(){
            modal2.setAttribute("style", "display: none;");
            modalContainer.setAttribute("style", "display: none;");
            enableScroll();
        };
    }
    if(document.getElementById("img3")){
        let img3, modal3, modalCloser3;

        img3 = document.getElementById("img3");
        modal3 = document.getElementById("modal3");
        modalCloser3 = document.getElementById("modal3-closer");
        img3.onclick = function(){
            modalContainer.setAttribute("style", "display: flex;");
            modal3.setAttribute("style", "display: block;");
            disableScroll();
        };
        modalCloser3.onclick = function(){
            modal3.setAttribute("style", "display: none;");
            modalContainer.setAttribute("style", "display: none;");
            enableScroll();
        }
    }
    if(document.getElementById("img4")){
        let img4, modal4, modalCloser4;

        img4 = document.getElementById("img4");
        modal4 = document.getElementById("modal4");
        modalCloser4 = document.getElementById("modal4-closer");
        img4.onclick = function(){
            modalContainer.setAttribute("style", "display: flex;");
            modal4.setAttribute("style", "display: block;");
            disableScroll();
        };
        modalCloser4.onclick = function(){
            modal4.setAttribute("style", "display: none;");
            modalContainer.setAttribute("style", "display: none;");
            enableScroll();
        }
    }
    if(document.getElementById("img5")){
        let img5, modal5, modalCloser5;

        img5 = document.getElementById("img5");
        modal5 = document.getElementById("modal5");
        modalCloser5 = document.getElementById("modal5-closer");
        img5.onclick = function(){
            modalContainer.setAttribute("style", "display: flex;");
            modal5.setAttribute("style", "display: block;");
            disableScroll();
        };
        modalCloser5.onclick = function(){
            modal5.setAttribute("style", "display: none;");
            modalContainer.setAttribute("style", "display: none;");
            enableScroll();
        }
    }
    if(document.getElementById("img6")){
        let img6, modal6, modalCloser6;

        img6 = document.getElementById("img6");
        modal6 = document.getElementById("modal6");
        modalCloser6 = document.getElementById("modal6-closer");
        img6.onclick = function(){
            modalContainer.setAttribute("style", "display: flex;");
            modal6.setAttribute("style", "display: block;");
            disableScroll();
        };
        modalCloser6.onclick = function(){
            modal6.setAttribute("style", "display: none;");
            modalContainer.setAttribute("style", "display: none;");
            enableScroll();
        }
    }
    if(document.getElementById("img7")){
        let img7, modal7, modalCloser7;

        img7 = document.getElementById("img7");
        modal7 = document.getElementById("modal7");
        modalCloser7 = document.getElementById("modal7-closer");
        img7.onclick = function(){
            modalContainer.setAttribute("style", "display: flex;");
            modal7.setAttribute("style", "display: block;");
            disableScroll();
        };
        modalCloser7.onclick = function(){
            modal7.setAttribute("style", "display: none;");
            modalContainer.setAttribute("style", "display: none;");
            enableScroll();
        }
    }
    if(document.getElementById("img8")){
        let img8, modal8, modalCloser8;

        img8 = document.getElementById("img8");
        modal8 = document.getElementById("modal8");
        modalCloser8 = document.getElementById("modal8-closer");
        img8.onclick = function(){
            modalContainer.setAttribute("style", "display: flex;");
            modal8.setAttribute("style", "display: block;");
            disableScroll();
        };
        modalCloser8.onclick = function(){
            modal8.setAttribute("style", "display: none;");
            modalContainer.setAttribute("style", "display: none;");
            enableScroll();
        }
    }
}

function preventDefault(e) {
    e.preventDefault();
}  

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

var supportsPassive = false;
try {
window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
}));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}