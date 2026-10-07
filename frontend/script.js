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
const learningButtons=document.querySelectorAll(".learning-button");
const learningTitle=document.querySelector("#learningTitle");
const learningDescription=document.querySelector("#learningDescription");
const progressBar=document.querySelector("#progressBar");
const progressText=document.querySelector("#progressText");

const learningData={
    html:{
        title:"HTML",
        description:"Learning semantic HTML and how to structure accessible websites.",
        progress:80
    },
    css:{
        title:"CSS",
        description:"Learning layouts,responsive design,and creating clean interfaces.",
        progress:70
    },
    javascript:{
        title:"JavaScript",
        description:"learning DOM manipulation,events,and browser APIs.",
        progress:80
    },
    git:{
        title:"Git & GitHub",
        description:"Learning version control,branches,commits,and collaboration.",
        progress:75
    }
}
learningButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
        const topic =button.dataset.topic;
        const selected=learningData[topic];

        learningButtons.forEach((item)=>{
            item.classList.remove("active");
        });
        button.classList.add("active");
        learningTitle.textContent= selected.title;
        learningDescription.textContent=selected.description;
        progressBar.style.width=`${selected.progress}%`;
        progressText.textContent=`${selected.progress}%`;
    })
})
const githubUsername="kiranSharma121";
const githubAvatar=document.querySelector("#githubAvatar");
const githubName=document.querySelector("#githubName");
const githubUsernameElement=document.querySelector("#githubUsername");
const repoCount=document.querySelector("#repoCount");
const followerCount=document.querySelector("#followerCount");
const followingCount=document.querySelector("#followingCount");
const githubError=document.querySelector("#githubError");
async function loadGithubProfile(){
    try{
        const response = await fetch(
            `https://api.github.com/users/${githubUsername}`
        );
        if(!response.ok){
            throw new Error("could not load GitHub profile");
        }
        const user =await response.json();
        githubAvatar.src=user.avatar_url;
        githubName.textContent=user.name || githubUsername;
        githubUsernameElement.textContent=`@${user.login}`;
        repoCount.textContent=user.public_repos;
        followerCount.textContent=user.followers;
        followingCount.textContent=user.following;
    }catch(error){
        githubName.textContent="GitHub unavailable";
        githubError.textContent="Unable to load GitHub information";
    }
}
loadGithubProfile();