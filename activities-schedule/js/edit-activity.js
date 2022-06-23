var list = document.querySelector("#activities-scheduled");

list.addEventListener("click", function(event) {
    event.preventDefault();
    var button = event.target;
    var li = button.parentNode;
    var ul = li.parentNode;

    if(event.target.className == 'btn-delete'){
        ul.removeChild(li);
    }
    if(event.target.className == 'btn-complete'){
        button.classList.add("invisible")
        li.classList.add("completed")
        
    }
    if(event.target.className == 'btn-edit'){
        button.classList.remove('btn-edit')
        button.classList.add('btn-edit-confirm')
        button.textContent = "Confirm"
    }
    if(event.target.className == 'btn-edit-confirm'){
        console.log(event.target)
        button.classList.remove('btn-edit-confirm')
        button.classList.add('btn-edit')
        button.textContent = "AAA"
        console.log(button)
    }
});


function getEditActivity(input){
    editText = {
        editDesc : input.value
    }
    return editText
}