var addBtn = document.querySelector(".btn-confirm");

addBtn.addEventListener("click", function(event) {
    event.preventDefault()
    var list = document.querySelector("#activities-list");
    var activity = getActivity(list);
    addActivity(activity);
});

function getActivity(list){
    var text = document.querySelector("#insert-activity")
    activity = {
        desc:text.value
    }
    return activity;
}

function createLi(activity) {
    var activityLi = document.createElement("li");
    activityLi.classList.add("active-activity");
    activityLi.appendChild(createSpan(activity));
    activityLi.appendChild(createCompleteBtn());
    activityLi.appendChild(createEditBtn());
    activityLi.appendChild(createDelBtn());
    return activityLi;
}

function createSpan(activity){
    var spanLi = document.createElement("span");
    spanLi.classList.add("activity-text");
    spanLi.textContent = activity.desc;
    return spanLi;
}

function createCompleteBtn(){
    var addCompleteBtn = document.createElement("i");
    addCompleteBtn.className = 'fa-solid fa-check';
    return addCompleteBtn;
}

function createEditBtn(){
    var addEditBtn = document.createElement("i");
    addEditBtn.className = 'fa-solid fa-pencil'
    return addEditBtn;
}

function createDelBtn(){
    var addDelBtn = document.createElement("i");
    addDelBtn.className = 'fa-solid fa-trash'
    return addDelBtn;
}

function addActivity(activity) {
    var activityLi = createLi(activity);
    var list = document.querySelector("#activities-scheduled");
    list.appendChild(activityLi);
}