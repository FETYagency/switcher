const SWITCHER = document.querySelector(".switcher");
const CHECK = document.querySelector("#switcher");
// save the theme after reload ;D
if(CHECK.checked===false){
    document.documentElement.dataset.theme="Dark"
}else{
    document.documentElement.dataset.theme="Light"
}

SWITCHER.addEventListener('click', ()=>{
    let CURRENT_THEME= document.documentElement.dataset.theme,
    ROOT=document.documentElement,
    TEST=CHECK.checked;
    ROOT.setAttribute("data-theme",`${CURRENT_THEME==="Dark"&&TEST===false?"Light":"Dark"}`)
});