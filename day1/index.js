// let firstImg=document.querySelector(".firstImg");
// firstImg.addEventListener("click",()=>{
//     firstImg.classList.add("afterClick");
// })
let firstImg=document.querySelectorAll(".imageContainer");
firstImg.forEach((e)=>{
    e.addEventListener("click",()=>{
        removeAfterClick();
        e.classList.add("afterClick")
    })
    
})
function removeAfterClick(){
    firstImg.forEach((e)=>{
        e.classList.remove("afterClick")
    })
}