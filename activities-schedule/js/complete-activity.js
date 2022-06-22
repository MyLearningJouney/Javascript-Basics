var list = document.querySelector("#activities-scheduled");

list.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(event.target)
    if(event.target.className == 'btn-complete'){
        var desc = document.querySelector(".active-activity");
        
    }
});