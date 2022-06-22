var list = document.querySelector("#activities-scheduled");

list.addEventListener("click", function(event) {
    event.preventDefault();
    if(event.target.className == 'btn-complete'){
        var desc = document.querySelector(".active-activity");
        var nodes = Array.from( list.children );
        var index = nodes.indexOf(desc);
        console.log(index);

    }
});