class ActivityController {                                          //Here is the ActivityController, here i define how the model will work inside
                                                                    //and how it will comunicate the model with the view. 
    #inputActivity;#activitiesList;;                                //And here i put this variables in private mode for security. 
                         

    constructor(){

        let $ = document.querySelector.bind(document);              //Create this variable to optmize the code writing, it's necessary to bind querySelector
        this.#inputActivity = $('#insert-list');                    //to document to make sure that querySelector points to document. 
        this.#activitiesList = new ActivityList();                  //Create new instance to Activity List
        this.activityView = new ActivityView($('#todolist'));       //New instace to Activity View, passing the UL id to identifies where the view will show
        this.activityView.update(this.#activitiesList);             //Update the Activities List to make sure that only new entries will show. 

    }


    insertActivity (event){                                         //At the submit event on form, this block will run
        event.preventDefault();                                     //Prevent the Default browser behavior
        this.#activitiesList.addActivity(this.createActivity())     //add to activitiesList Model a new Activity Object, using the CreateActivity method from Controller
        this.activityView.update(this.#activitiesList);             //Update the List in every event detection. In this case, on every submit. 

    }

    createActivity(){
        return new Activity(this.#inputActivity.value);             //Create new Instance of Activity Model, passing the input value 

    }
}