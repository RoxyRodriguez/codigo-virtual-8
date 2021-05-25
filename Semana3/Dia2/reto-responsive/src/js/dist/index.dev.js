"use strict";

var header = document.getElementById("header");
var menu = document.getElementById("menu");

menu.onclick = function () {
  header.classList.toggle("open");
};

AOS.init();