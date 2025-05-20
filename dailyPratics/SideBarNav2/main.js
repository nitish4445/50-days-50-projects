const sidebar =document.getElementById('sidebar')
const toggleButton=document.getElementById('toggle-btn');
function toggleSidebar(){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
    closeAllSubMenus()
}
function handleSubMenu(button){
    // button.nextElementSibling.classList.contain('show')
    // console.log("clicked");
    if(!button.nextElementSibling.classList.contains('show')){
        closeAllSubMenus()
    }
    button.nextElementSibling.classList.toggle('show');
    button.classList.toggle('rotate')
    if(sidebar.classList.contains('close')){
        sidebar.classList.toggle('close')
        toggleButton.classList.toggle('rotate')
    }
}
function closeAllSubMenus(){
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul=>{
        ul.classList.remove('show');
        ul.previousElementSibling.classList.remove('rotate')
    })
}