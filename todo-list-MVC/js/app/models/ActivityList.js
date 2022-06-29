class ActivityList{                                             //Here is the ActivityList Model, basically how the is the To-do List

    #activities;

    constructor(){
        
        this.#activities = []
    }


    addActivity(activity){
        this.#activities.push(activity)
    }

    btnActivity(list){
        list.addEventListener("click", function(event){
            event.preventDefault();
            let icon = event.target;
            let btnWrapper = icon.parentNode;
            let li = btnWrapper.parentNode;
            let activity = li.querySelector(".listActivity")
            let data = li.querySelector(".listDate")
            if(icon.className === 'fa-solid fa-check'){
                var createdDate = li.querySelector(".listDate").textContent;
                activity.classList.add("completed")
                data.classList.add("dateCompleted")
                data.textContent = new Date(Date.now())
                icon.className = 'fa-solid fa-x'
                btnWrapper.querySelector(".fa-solid.fa-pencil").classList.add("invisible")
                btnWrapper.querySelector(".fa-solid.fa-trash").classList.add("invisible")
                return
            }
            if(icon.className === 'fa-solid fa-x'){
                activity.classList.remove("completed")
                data.classList.remove("dateCompleted")
                console.log(createdDate)
                //data.textContent = createdDate;
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