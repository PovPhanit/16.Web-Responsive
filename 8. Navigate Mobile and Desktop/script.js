const bar =document.querySelector(".ul4 .phone");
const left_menu=document.querySelector(".left-menu");
const effect=document.querySelector(".effect");
bar.addEventListener("click",function(){
left_menu.classList.add("active");
effect.classList.add("overlay");
});
effect.addEventListener("click",function(){
    left_menu.classList.remove("active");
    effect.classList.remove("overlay");
});

const navAll=document.querySelectorAll(".clickNav");
const sub_menu=document.querySelectorAll(".sub-menu");
console.log(navAll)
console.log(sub_menu);

// navAll.forEach(function(nav,i){
//     nav.addEventListener("click",(e)=>{
//         e.preventDefault();
//         console.log(i);
//         sub_menu[i].classList.toggle("active1");
//     })
// })
//Style 2
// navAll.forEach(function(nav,i){
//     nav.addEventListener("click",(e)=>{
//         e.preventDefault();
//         navAll.forEach((del,i)=>{
//             sub_menu[i].classList.remove("active1");
//         })
//         sub_menu[i].classList.add("active1");
//     })
// })
navAll.forEach(function(nav, i) {
    nav.addEventListener("click", (e) => {
        e.preventDefault();
        navAll.forEach((del, j) => {
            if (i !== j) {
                sub_menu[j].classList.remove("active1");
            }
        });
        const isSubMenuActive = sub_menu[i].classList.contains("active1");
        if (isSubMenuActive) {
            sub_menu[i].classList.remove("active1"); // Close submenu
        } else {
            sub_menu[i].classList.add("active1"); // Open submenu
        }
    });
});
// ===================Mobile===========================
const navMobile=document.querySelectorAll(".navPhone");
const childNav=document.querySelectorAll(".childPhone");
navMobile.forEach(function(nav, i) {
    nav.addEventListener("click", (e) => {
        e.preventDefault();
        navMobile.forEach((del, j) => {
            if (i !== j) {
                childNav[j].classList.remove("active2");
            }
        });
        const isSubMenuActive = childNav[i].classList.contains("active2");
        if (isSubMenuActive) {
            childNav[i].classList.remove("active2"); // Close submenu
        } else {
            childNav[i].classList.add("active2"); // Open submenu
        }
    });
});
