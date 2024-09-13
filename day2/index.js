const prev=document.querySelector("#prev");
const next=document.querySelector("#Next");
const progress=document.querySelector("#progress");
const circle=document.querySelectorAll(".circle");
let currentActive=1;
next.addEventListener('click',()=>{
    currentActive++;
    if(currentActive>circle.length){
        currentActive=circle.length;
    }
    update();
    
})
prev.addEventListener('click',()=>{
    currentActive--;
    if(currentActive<1){
        currentActive=1;
    }
    update();
    
})

const update=()=>{
    circle.forEach((circl,idx)=>{
        if(idx<currentActive){
            circl.classList.add('active');
        }else{
            circl.classList.remove('active');
        }
    })
    const actives=document.querySelectorAll(".active");
    progress.style.width=(actives.length-1)/(circle.length-1)*100+"%";
    if(currentActive===1){
        prev.disabled=true;
    }else if(currentActive===circle.length){
        next.disabled=true;
    }else{
        next.disabled=false;
        prev.disabled=false;
    }
}