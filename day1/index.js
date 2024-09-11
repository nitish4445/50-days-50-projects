const panel=document.querySelectorAll(".panle");

panel.forEach((panel)=>{
    panel.addEventListener("click",()=>{
        removeActiveClasses();
        panel.classList.add("active");
    })
})
const removeActiveClasses=()=>{
    panel.forEach((panel)=>{
        panel.classList.remove('active')
    })
}