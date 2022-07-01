class ActivityList{                                             //Here is the ActivityList Model, basically how the is the To-do List

    #activities;

    constructor(){
        
        this.#activities = []
    }


    addActivity(activity){
        this.#activities.push(activity)
        //let createdDate = new DateHelper(activity.date)
    }

    btnActivity(list){
        list.addEventListener("click", function(event){
            event.preventDefault();
            console.log(event.target)
            let icon = event.target;
            let btnWrapper = icon.parentNode;
            let li = btnWrapper.parentNode;
            let activity = li.querySelector(".listActivity")
            let date = li.querySelector(".listDate")
            let createdDate = li.querySelector(".listCreatedDate")
            let editHelper = new EditInputHelper()
            let dateHelper = new DateHelper()
            let editInput = document.createElement('input')
            if(icon.className === 'fa-solid fa-check completeIcon'){
                activity.classList.add("completed")
                date.classList.add("dateCompleted")
                date.classList.remove("hide")
                createdDate.classList.add("hide")
                let completedDate = dateHelper.dateToText(new Date(Date.now()))
                date.textContent = completedDate
                icon.className = 'fa-solid fa-x'
                btnWrapper.querySelector(".fa-solid.fa-pencil").classList.add("invisible")
                btnWrapper.querySelector(".fa-solid.fa-trash").classList.add("invisible")
                return
            }
            else if(icon.className === 'fa-solid fa-x'){
                activity.classList.remove("completed")
                date.classList.remove("dateCompleted")
                date.classList.add("hide")
                createdDate.classList.remove("hide")
                icon.className = 'fa-solid fa-check completeIcon'
                btnWrapper.querySelector(".fa-solid.fa-pencil").classList.remove("invisible")
                btnWrapper.querySelector(".fa-solid.fa-trash").classList.remove("invisible")
                return
            }
            else if(icon.className === 'fa-solid fa-pencil'){
                let confirmEdit = document.createElement('i')
                confirmEdit.className = 'fa-solid fa-check'
                confirmEdit.classList.add("confirmEditIcon")
                let cancelEdit = document.createElement('i')
                cancelEdit.className = 'fa-solid fa-x'
                cancelEdit.classList.add("cancelEditIcon")
                editHelper.setEditInputAttributes(activity.innerHTML,editInput)
                activity.parentNode.prepend(editInput)
                activity.classList.add("hide")
                btnWrapper.prepend(cancelEdit)
                btnWrapper.prepend(confirmEdit)
                btnWrapper.querySelector(".fa-solid.fa-check.completeIcon").remove()
                btnWrapper.querySelector(".fa-solid.fa-pencil").remove()
                btnWrapper.querySelector(".fa-solid.fa-trash").classList.add("invisible")
            }
            else if(icon.className === 'fa-solid fa-check confirmEditIcon'){
                console.log("Cliquei")
            }
            else if(icon.className === 'fa-solid fa-x cancelEditIcon'){
                activity.parentNode.querySelector('input').remove()
                activity.classList.remove("hide")
                btnWrapper.prepend()
                btnWrapper.querySelector(".fa-solid.fa-check.confirmEditIcon").classList.add("hide")
                btnWrapper.querySelector(".fa-solid.fa-x.cancelEditIcon").classList.add("hide")
                btnWrapper.querySelector(".fa-solid.fa-check.completeIcon").classList.remove("hide")
                btnWrapper.querySelector(".fa-solid.fa-pencil").classList.remove("hide")
                btnWrapper.querySelector(".fa-solid.fa-trash").classList.remove("invisible")
            }
        });
    }

    get activities(){
        return this.#activities;
    }

    
    

}