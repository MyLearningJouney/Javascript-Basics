class ActivityList{

    #activities;

    constructor(){
        
        this.#activities = []
    }


    addActivity(activity){
        this.#activities.push(activity)
    }

    get activities(){
        return this.#activities;
    }
    

}