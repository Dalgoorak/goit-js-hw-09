!function(){var t=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),e=document.body,o=null;function a(){e.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16))}function c(e,o){t.disabled=e,n.disabled=o}c(!1,!0),t.addEventListener("click",(function(){o=setInterval(a,1e3),c(!0,!1)})),n.addEventListener("click",(function(){clearInterval(o),c(!1,!0)}))}();
//# sourceMappingURL=01-color-switcher.a3615e64.js.map