class ActivityController {                             //Here is the ActivityController, here we define how the model will work inside
                                                       //and will comunicate the model with the view. 
    #inputActivity;#activitiesList;;       
                         

    constructor(){

        let $ = document.querySelector.bind(document); //create this variable to optmize the code writing, we need to bind querySelector
        this.#inputActivity = $('#insert-list');       //to document to make sure that querySelector points to document. 
        this.#activitiesList = new ActivityList();     //Create new instance to Activity List
        this.activityView = new ActivityView($('#todolistView'));
        this.activityView.update(this.#activitiesList);
    }


    insertActivity (event){                                         //At the submit event on form, this block will run
        event.preventDefault();                                     //Prevent the Default browser behavior
        this.#activitiesList.addActivity(this.createActivity())     //add to activitiesList a new instance of Activity Object
        this.activityView.update(this.#activitiesList);
        console.log(this.#activitiesList)

    }

    createActivity(){
        return new Activity(this.#inputActivity.value);     //Create new Instance of Activity Model, passing the input value 

    }
}