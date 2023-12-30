const bar=document.querySelector(".fa-bars")
const ul=document.querySelector("ul")
const erase=document.querySelector(".fa-xmark")
bar.addEventListener('click',()=>{
    
    if(ul.matches("ul")){
        bar.style.visibility="hidden"
        erase.style.display="block"
        ul.classList.add("open")
        ul.classList.add("sticky")

    }
})
erase.addEventListener("click",()=>{
        ul.classList.remove("open")
        erase.style.display="none"
        bar.style.visibility="visible"
        ul.style.backgroundColor="white"
})