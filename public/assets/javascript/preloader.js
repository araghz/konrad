var keys = {
    37: 1,
    38: 1,
    39: 1,
    40: 1
  };
  
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
      get: function () {
        supportsPassive = true;
      }
    }));
  } catch (e) {}
  
  var wheelOpt = supportsPassive ? {
    passive: false
  } : false;
  var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.addEventListener(wheelEvent, preventDefault, wheelOpt);
    window.addEventListener('touchmove', preventDefault, wheelOpt);
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

disableScroll();

window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById("preloader").style.opacity = "0";
        document.getElementById("preloader").style.pointerEvents = "none";
        enableScroll();
        document.body.classList.add("page-loaded");
        if (screen.width < 800) {
            document.body.classList.add("isMobile");
        }
    }, 2200);
})

window.addEventListener("resize", function () {
    if (screen.width < 800) {
        document.body.classList.add("isMobile");
    } else {
        document.body.classList.remove("isMobile");
    }
})