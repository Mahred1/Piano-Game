var black = document.querySelectorAll(".black-key");

var white= document.querySelectorAll(".white-key");

black.forEach(element => 
    element.addEventListener("click",function(){
        element.classList.add("pressed-w");
        setTimeout(() => {
            element.classList.remove("pressed-w");
        }, 100);
    })
)
white.forEach(element => 
    element.addEventListener("click",function(){
        element.classList.add("pressed");
        setTimeout(() => {
            element.classList.remove("pressed");
        }, 100);
    })
)
black.forEach(element => {
    switch (element.classList[1]) {
        case "Do":
            element.addEventListener("click",function(){
                var audio = new Audio(element.classList[1]+".mp3");
                audio.play();
            })
            break;
        case "Mi":
            element.addEventListener("click",function(){
                var audio = new Audio(element.classList[1]+".mp3");
                audio.play();
            })
            break;
        case "So":
            element.addEventListener("click",function(){
                var audio = new Audio(element.classList[1]+".mp3");
                audio.play();
            })
            break;
        case "Ti":
            element.addEventListener("click",function(){
                var audio = new Audio(element.classList[1]+".mp3");
                audio.play();
            })
            break;
    
        default:
            break;
    }
});
white.forEach(element => {
    switch (element.classList[1]) {
        case "Re":
            element.addEventListener("click",function(){
                var audio = new Audio(element.classList[1]+".mp3");
                audio.play();
            })
            break;
        case "Fa":
            element.addEventListener("click",function(){
                var audio = new Audio(element.classList[1]+".mp3");
                audio.play();
            })
            break;
        case "La":
            element.addEventListener("click",function(){
                var audio = new Audio(element.classList[1]+".mp3");
                audio.play();
            })
            break;
        case "Dow":
            element.addEventListener("click",function(){
                var audio = new Audio("Do.mp3");
                audio.play();
            })
            break;
    
        default:
            break;
    }
});
document.querySelector("body").addEventListener("keypress",function(event){
    switch (event.key) {
        case "a":
            document.querySelector(".Do").click();
            break;
        case "s":
            document.querySelector(".Re").click();
            break;
        case "d":
            document.querySelector(".Mi").click();
            break;
        case "f":
            document.querySelector(".Fa").click();
            break;
        case "j":
            document.querySelector(".So").click();
            break;
        case "k":
            document.querySelector(".La").click();
            break;
        case "l":
            document.querySelector(".Ti").click();
            break;
        case ";":
            document.querySelector(".Dow").click();
            break;
        case " ":
            
            break;
    
        default:
            break;
    }
})
