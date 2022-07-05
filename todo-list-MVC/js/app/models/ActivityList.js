class ActivityList{                                             //Here is the ActivityList Model, basically how the is the To-do List

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

    removeActivity(id){
        for(let i = 0; i < this.#activities.length; i++){
            if(this.#activities[i].id == id){
                this.#activities.splice(i,1)
            }
        }
    }
    
    editActivity(id){
        for(let i = 0; i < this.#activities.length; i++){
            if(this.#activities[i].id == id){
                this.#activities[i].activityType = 'editing'
                this.#activities[i].icons = this.#activities[i].activityType
                console.log(this.#activities[i].activityType)
                console.log(this.#activities[i].icons)
            }
        }
    }
}