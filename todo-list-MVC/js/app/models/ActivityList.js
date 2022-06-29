class ActivityList{                                             //Here is the ActivityList Model, basically how the is the To-do List

    #activities;

    constructor(){
        
        this.#activities = []
    }


    addActivity(activity){
        this.#activities.push(activity)
    }

    completeActivity(list){
        list.addEventListener("click", function(event){
            event.preventDefault();
            let icon = event.target;
            let btnWrapper = icon.parentNode;
            let li = btnWrapper.parentNode;
            let span = li.querySelector(".listActivity")
            if(icon.className === 'fa-solid fa-check'){
                span.classList.add("completed")
            }
        });
    }

    get activities(){
        return this.#activities;
    }
    
    

}