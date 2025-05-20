let dropdownBtn=Array.from(document.querySelectorAll('.dropdown-btn'));
let sidebar=document.getElementById("sidebar");
let toggleBtn=document.getElementById("Toggle-btn");
let subMenu=document.querySelectorAll(".sub-menu");
dropdownBtn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(!btn.nextElementSibling.classList.contains('show')){
            closeAllsubMenu();
        }
        if(sidebar.classList.toggle('close')){
            sidebar.classList.toggle('close');
        }
        btn.nextElementSibling.classList.toggle('show')
        btn.classList.toggle('rotate')
        toggleBtn.classList.toggle("rotate")

    })
})
toggleBtn.addEventListener("click",()=>{
    sidebar.classList.toggle('close');
    toggleBtn.classList.toggle("rotate")
    closeAllsubMenu();
})

function closeAllsubMenu(){
    subMenu.forEach((menu)=>{
        // console.log(menu);
        menu.classList.remove('show');
        
    })
}