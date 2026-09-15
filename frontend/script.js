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