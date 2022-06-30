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
            let icon = event.target;
            let btnWrapper = icon.parentNode;
            let li = btnWrapper.parentNode;
            let activity = li.querySelector(".listActivity")
            let date = li.querySelector(".listDate")
            let createdDate = li.querySelector(".listCreatedDate")
            if(icon.className === 'fa-solid fa-check'){
                activity.classList.add("completed")
                date.classList.add("dateCompleted")
                date.classList.remove("hide")
                createdDate.classList.add("hide")
                date.textContent = new Date(Date.now())
                icon.className = 'fa-solid fa-x'
                btnWrapper.querySelector(".fa-solid.fa-pencil").classList.add("invisible")
                btnWrapper.querySelector(".fa-solid.fa-trash").classList.add("invisible")
                return
            }
            if(icon.className === 'fa-solid fa-x'){
                activity.classList.remove("completed")
                date.classList.remove("dateCompleted")
                date.classList.add("hide")
                createdDate.classList.remove("hide")
                icon.className = 'fa-solid fa-check'
                btnWrapper.querySelector(".fa-solid.fa-pencil").classList.remove("invisible")
                btnWrapper.querySelector(".fa-solid.fa-trash").classList.remove("invisible")
                return
            }
            
        });
    }



    get activities(){
        return this.#activities;
    }

    
    

}