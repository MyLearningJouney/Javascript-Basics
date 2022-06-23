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
    var addCompleteBtn = document.createElement("button");
    addCompleteBtn.classList.add("btn-complete");
    addCompleteBtn.appendChild('<i class="fa-solid fa-check"></i>')
    return addCompleteBtn;
}

function createEditBtn(){
    var addEditBtn = document.createElement("button");
    addEditBtn.classList.add("btn-edit");
    addEditBtn.textContent = "Edit";
    return addEditBtn;
}

function createDelBtn(){
    var addDelBtn = document.createElement("button");
    addDelBtn.classList.add("btn-delete")
    addDelBtn.textContent = "Delete"
    return addDelBtn;
}

function addActivity(activity) {
    var activityLi = createLi(activity);
    var list = document.querySelector("#activities-scheduled");
    list.appendChild(activityLi);
}