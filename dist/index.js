"use strict";

// ---- main section ----

document.addEventListener('DOMContentLoaded', appStart);
function appStart() {
  setMargin();
}
function setMargin() {
  var windowWidth = window.innerWidth;
  var percent = (windowWidth - 1030) / 2;
  document.querySelector('main .relative').style.marginRight = -percent + 'px';
}