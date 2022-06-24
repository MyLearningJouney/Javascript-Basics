let list = document.querySelector("#activities-scheduled");

list.addEventListener("click", function(event) {
    event.preventDefault();
    let i = event.target;
    let li = i.parentNode;
    let ul = li.parentNode;
    console.log(event.target)

    if(event.target.className === 'fa-solid fa-trash'){
        ul.removeChild(li);
        return;
    }

    if(event.target.className === 'fa-solid fa-check'){
        let span = li.querySelector('.activity-text');
        i.className = 'fa-solid fa-x';
        span.classList.add("completed")
        li.getElementsByClassName('fa-solid fa-pencil')[0].remove();
        li.getElementsByClassName('fa-solid fa-trash')[0].remove();  
        return;
    }

    if(event.target.className == 'fa-solid fa-x'){
        let span = li.querySelector('.activity-text');
        i.className = 'fa-solid fa-check';
        span.classList.remove("completed")
        li.appendChild(createEditBtn());
        li.appendChild(createDelBtn());
        return;
    }

    if(event.target.className === 'fa-solid fa-pencil'){
        var input = document.createElement("input");
        li.querySelector('.btn-edit').remove();
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
