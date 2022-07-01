class ActivityList{                                             //Here is the ActivityList Model, basically how the is the To-do List

    #activities;

    constructor(){
        
        this.#activities = []
    }


    addActivity(activity){
        this.#activities.push(activity)
    }

    btnActivity(list,ActivityList){
        list.addEventListener("click", function(event){
            event.preventDefault();
            let icon = event.target;
            let btnWrapper = icon.parentNode;
            let li = btnWrapper.parentNode;
            let activity = li.querySelector(".listActivity")
            let date = li.querySelector(".listDate")
            let createdDate = li.querySelector(".listCreatedDate")
            let editHelper = new EditInputHelper()
            let dateHelper = new DateHelper()
            let iconHelper = new IconHelper()
            let editInput = document.createElement('input')
            if(icon.className === 'fa-solid fa-check completeIcon'){
                activity.classList.add("completed")
                date.classList.add("dateCompleted")
                date.classList.remove("hide")
                createdDate.classList.add("hide")
                let completedDate = dateHelper.dateToText(new Date(Date.now()))
                date.textContent = completedDate
                icon.className = 'fa-solid fa-x'
                iconHelper.completeIconHidden(btnWrapper)
                return
            }
            else if(icon.className === 'fa-solid fa-x'){
                activity.classList.remove("completed")
                date.classList.remove("dateCompleted")
                date.classList.add("hide")
                createdDate.classList.remove("hide")
                icon.className = 'fa-solid fa-check completeIcon'
                iconHelper.cancelCompleteIconHidden(btnWrapper)
                return
            }
            else if(icon.className === 'fa-solid fa-pencil'){
                editHelper.setEditInputAttributes(activity.innerHTML,editInput)
                activity.parentNode.prepend(editInput)
                activity.classList.add("hide")
                iconHelper.createEditIcon(btnWrapper)
                return

            }
            else if(icon.className === 'fa-solid fa-check confirmEditIcon'){
                console.log(ActivityList.activity)
                return
            }
            else if(icon.className === 'fa-solid fa-x cancelEditIcon'){
                activity.parentNode.querySelector('input').remove()
                activity.classList.remove("hide")
                iconHelper.cancelEditRemoveIcon(btnWrapper)
                iconHelper.createIcon(btnWrapper)
                return
            }
            else if(icon.className === 'fa-solid fa-trash'){
                li.remove()
                return
            }
        });
    }

    get activities(){
        return this.#activities;
    }

    
    

}