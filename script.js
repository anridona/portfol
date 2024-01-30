document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector(".menu").addEventListener("click",()=>{
        document.querySelector(".nav-bar").classList.add("active")
    }) 
    document.querySelector(".close").addEventListener("click",()=>{
        document.querySelector(".nav-bar").classList.remove("active")
    })        
    document.querySelectorAll(".element").forEach((element) =>{
        element.addEventListener("click",()=>{
            document.querySelector(".nav-bar").classList.remove("active")
        })        
    })
    
})