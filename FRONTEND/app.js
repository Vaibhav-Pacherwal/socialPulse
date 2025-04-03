let twitter1 = document.querySelector("#pf1");
let twitter2 = document.querySelector(".twitter");
let close1 = document.querySelector("#closeT");
let pf = document.querySelector(".platform");
twitter1.addEventListener("click", ()=>{
    twitter2.classList.add("tweet");
    pf.classList.add("upPf");
});
close1.addEventListener("click", ()=>{
    twitter2.classList.remove("tweet");
    pf.classList.remove("upPf");
});

let git1 = document.querySelector("#pf2");
let git2 = document.querySelector(".github");
let close2 = document.querySelector("#closeG");
git1.addEventListener("click", ()=>{
    git2.classList.add("tweet");
    pf.classList.add("upPf");
});
close2.addEventListener("click", ()=>{
    git2.classList.remove("tweet");
    pf.classList.remove("upPf");
});

let link1 = document.querySelector("#pf3");
let link2 = document.querySelector(".LinkedIn");
let close3 = document.querySelector("#closeL");
link1.addEventListener("click", ()=>{
    link2.classList.add("tweet");
    pf.classList.add("upPf");
});
close3.addEventListener("click", ()=>{
    link2.classList.remove("tweet");
    pf.classList.remove("upPf");
});

let insta1 = document.querySelector("#pf4");
let insta2 = document.querySelector(".instagram");
let close4 = document.querySelector("#closeI");
insta1.addEventListener("click", ()=>{
    insta2.classList.add("tweet");
    pf.classList.add("upPf");
});
close4.addEventListener("click", ()=>{
    insta2.classList.remove("tweet");
    pf.classList.remove("upPf");
});
