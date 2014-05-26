'use strict';
var global=window;

global.unid=(function(p){return function(e){var n=e[p]||0;e[p]=++n;return n}})('uid-n');

function listenOnce(e,l,f){
 var n=unid(e);n='f'+n;e.addEventListener(l,e[n]=(function(evt){f(evt);e.removeEventListener(l,e[n],0)}),0);
};

