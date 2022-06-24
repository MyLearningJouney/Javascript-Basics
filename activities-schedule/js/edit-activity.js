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
        li.getElementsByClassName('fa-solid fa-check')[0].remove();
        li.getElementsByClassName('fa-solid fa-pencil')[0].remove();
        li.getElementsByClassName('fa-solid fa-trash')[0].remove();
        let input = document.createElement("input");
        let span = li.querySelector('.activity-text').textContent;
        input.classList.add("input-edit")
        input.setAttribute('placeholder',span)
        li.append(input);
        li.appendChild(createConfirmEditBtn());
        li.appendChild(createCancelEditBtn());
        return;
    }

    if(event.target.className == 'fa-solid fa-check confirm-edit'){
        let text = li.querySelector('.input-edit').value
        let span = document.createElement('span');
        span.classList.add("activity-text");
        span.textContent = text
        li.textContent = ''
        li.appendChild(span);
        li.appendChild(createCompleteBtn());
        li.appendChild(createEditBtn());
        li.appendChild(createDelBtn());
        console.log(text)
        return;
    }

    if(event.target.className == 'fa-solid fa-x cancel-edit'){
        let input = li.querySelector('.input-edit')
        li.removeChild(input)
        li.getElementsByClassName('fa-solid fa-check confirm-edit')[0].remove();
        li.getElementsByClassName('fa-solid fa-x cancel-edit')[0].remove();
        li.appendChild(createCompleteBtn());
        li.appendChild(createEditBtn());
        li.appendChild(createDelBtn());
        return;
    }
});

function createConfirmEditBtn(){
    var addConfirmEditBtn = document.createElement("i");
    addConfirmEditBtn.className = 'fa-solid fa-check'
    addConfirmEditBtn.classList.add('confirm-edit')
    return addConfirmEditBtn;
}

function createCancelEditBtn(){
    var addCancelEditBtn = document.createElement("i");
    addCancelEditBtn.className = 'fa-solid fa-x'
    addCancelEditBtn.classList.add('cancel-edit')
    return addCancelEditBtn;
}