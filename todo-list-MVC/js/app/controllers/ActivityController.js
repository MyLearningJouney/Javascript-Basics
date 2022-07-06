class ActivityController {                                          //Here is the ActivityController, here i define how the model will work inside
                                                                    //and how it will comunicate the model with the view. 
    #inputActivity;#activitiesList;                                //And here i put this variables in private mode for security. 
                         

    constructor(){

        this.#inputActivity = document.querySelector('#insert-list');
        this.activityView = new ActivityView(document.querySelector('#todolist'));
        this.#activitiesList = new ActivityList(this.activityView);
        
        
    }


    insertActivity (event){
        event.preventDefault();
        this.#activitiesList.addActivity(this.createActivity())
        this.activityView.createListItem(this.#activitiesList);
        let li = document.querySelectorAll('li')
        li[li.length-1].addEventListener("click", e => {
            e.preventDefault()
            IconBehavior.iconBehavior(e,this.#activitiesList)
        })
    }


    createActivity(){
        return new Activity(this.#inputActivity.value);

    }
}