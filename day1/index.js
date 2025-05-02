// let firstImg=document.querySelector(".firstImg");
// firstImg.addEventListener("click",()=>{
//     firstImg.classList.add("afterClick");
// })
let viewName=document.querySelectorAll(".viewName")
let firstImg=document.querySelectorAll(".imageContainer");
firstImg.forEach((e)=>{
    e.addEventListener("click",()=>{
        removeAfterClick();
        e.classList.add("afterClick");
        let viewName = e.querySelector(".viewName");
        document.querySelectorAll(".viewName").forEach((v) => {
            v.style.display = "none";
        });

        // Show the h1 inside the clicked element
        if (viewName) {
            viewName.style.display = "block";
        }
    })
    
})
function removeAfterClick(){
    firstImg.forEach((e)=>{
        e.classList.remove("afterClick")
    })
}