// ---- main section ----

document.addEventListener('DOMContentLoaded', appStart);

function appStart() {
   setMargin();
}

function setMargin() {
   const windowWidth = window.innerWidth;
   const percent = (windowWidth - 1030)/2;
   document.querySelector('main .relative').style.marginRight = - (percent) + 'px';
   
}

