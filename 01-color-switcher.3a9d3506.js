const e=document.querySelector("button[data-start]"),t=document.querySelector("button[data-stop]");let d=document.querySelector("body"),a=null;t.disabled=!0;e.addEventListener("click",(()=>{a=setInterval((()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(()=>{clearInterval(a),e.disabled=!1,t.disabled=!0}));
//# sourceMappingURL=01-color-switcher.3a9d3506.js.map
