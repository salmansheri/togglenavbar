const hamburger = document.getElementById("ham"); 

const mobileLinks = document.getElementById("links");

let clicked = false; 

hamburger.addEventListener("click", () => {       

        mobileLinks.classList.toggle("active")
   

    


  
})

console.log(mobileLinks.classList)