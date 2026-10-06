console.log("Portfolio website loaded!");
const sections =document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-links a");
window.addEventListener("scroll",()=>{
    let currentSection = "";
 sections.forEach((section)=>{
    const sectionTop = section.offsetTop-200;
    const sectionHeight =section.offsetHeight;
    if(
        window.scrollY >=sectionTop &&
        window.scrollY < sectionTop + sectionHeight

    ){
        currentSection =section.getAttribute("id");

    }
 });
 navLinks.forEach((link)=>{
    link.classList.remove("active");
    if (link.getAttribute("href")==`#${currentSection}`){
        link.classList.add("active")
    }
 });
});
const themeToggle=document.querySelector("#themeToggle");
const savedTheme = localStorage.getItem("theme");
if(savedTheme=="light"){
    document.body.classList.add("light-mode");
    themeToggle.textContent=="🌙";
}
themeToggle.addEventListener("click",()=>{
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeToggle.textContent="🌙";
        localStorage.setItem("theme","light")
        
    }else{
        themeToggle.textContent="☀️";
        localStorage.setItem("theme","dark")
       
    }
})
const menuButton =document.querySelector("#menuButton");
const navLink=document.querySelector(".nav-links");
menuButton.addEventListener("click",()=>{
    navLink.classList.toggle("show")
})
