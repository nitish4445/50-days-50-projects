let dropdownBtn=document.querySelectorAll(".dropdown-btn");
let subMenu=Array.from(document.querySelectorAll(".sub-menu"));
let sideBar=document.getElementById('sidebar');
let toggleButton=document.getElementById("toggle-btn");
let arr=Array.from(dropdownBtn)
function toggleSideBar(){
    sideBar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');
    closeAllSubMenu();
}
arr.forEach((ar)=>{
    ar.addEventListener("click",()=>{
        if(!ar.nextElementSibling.classList.contains("show")){
            closeAllSubMenu()
        }
        console.log(ar.nextElementSibling.classList.contains('show'));
         ar.nextElementSibling.classList.toggle("show")
         ar.classList.toggle('rotate')
         if(sideBar.classList.contains('close')){
            sideBar.classList.toggle('close')
            toggleButton.classList.toggle('rotate')
         }
    }) 
})
function closeAllSubMenu(){
    subMenu.forEach((ul)=>{
        // console.log(ul);
        ul.classList.remove('show')
        ul.previousElementSibling.classList.remove('rotate')
        // console.log(ul.previousElementSibling);
        
    })
}
