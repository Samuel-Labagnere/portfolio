function init(){
    let modalContainer = document.getElementById("modal-container");

    let modalCloser = document.getElementById("modal1-closer");
    let modalToClose;

    let img1 = document.getElementById("img1");
    let modal1 = document.getElementById("modal1");

    img1.onclick = function(){
        modalContainer.setAttribute("style", "display: flex;");
        modal1.setAttribute("style", "display: block;");
        modalToClose = document.getElementById("modal1");
        modalCloser = document.getElementById("modal1-closer");
        disableScroll();
        console.log(modalCloser);
        console.log(modalToClose);
    };
    modalCloser.onclick = function(){
        console.log("ModalCloser clicked !");
        modalToClose.setAttribute("style", "display: none;");
        modalContainer.setAttribute("style", "display: none;");
        enableScroll();
    };
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