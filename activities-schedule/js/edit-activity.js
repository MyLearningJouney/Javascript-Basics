var list = document.querySelector("#activities-scheduled");

list.addEventListener("click", function(event) {
    event.preventDefault();
    var i = event.target;
    //var button = i.parentNode;
    var li = i.parentNode;
    var ul = li.parentNode;
    console.log(event.target)

    if(event.target.className == 'btn-delete'){
        ul.removeChild(li);
        return;
    }

    if(event.target.className === 'fa-solid fa-check'){
        var span = li.querySelector('.activity-text');
        var icon = li.querySelectorAll('.fa-solid fa-check');
        i.className = 'fa-solid fa-x';
        //button.textContent = "Uncheck"
        //span.classList.add("completed")
        li.querySelector('.btn-edit').remove()
        return;
    }

    if(event.target.className == 'btn-uncheck'){
        li.querySelector('.btn-uncheck').remove()
        li.querySelector('.btn-delete').remove()
        li.classList.remove("completed")
        CreateButtons(li);
        return;
    }

    if(event.target.className == 'btn-edit'){
        button.classList.remove('btn-edit')
        button.classList.add('btn-edit-confirm')
        button.textContent = "Confirm"
        var input = document.createElement("input");
        input.classList.add("input-edit")
        li.append(input);
        return;
    }

    if(event.target.className == 'btn-edit-confirm'){
        button.classList.remove('btn-edit-confirm')
        button.classList.add('btn-edit')
        button.textContent = "Edit"
        var text = li.querySelector('.input-edit').value
        var span = document.createElement('span');
        span.classList.add("activity-text");
        span.textContent = text
        li.textContent = ''
        li.appendChild(span);
        CreateButtons(li);
        console.log(text)
        return;
    }
});

function CreateButtons(li){
    li.appendChild(createCompleteBtn());
    li.appendChild(createEditBtn());
    li.appendChild(createDelBtn());
}
