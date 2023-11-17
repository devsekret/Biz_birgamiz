const elButton = document.querySelector(".btn");
const elButtonMenu = document.querySelector(".btn__menu");
const elButtonExit = document.querySelector(".btn__exit");
const elNavList = document.querySelector(".nav__list");

elButton.addEventListener ("click", ()=> {
    elButtonMenu.classList.toggle("menu__exit")
    elButtonExit.classList.toggle("exit__menu")
    elNavList.classList.toggle("nav__blok")
}
)




// Modal 


var elMadal = document.querySelector(".hero__madol")
var elButtonMadal = document.querySelector(".hero__btn") 


elButtonMadal.addEventListener("click", ()=> {
    elMadal.classList.toggle("blok")
    
    console.log(ii);
})