class ActivityList{                                             //Here is the ActivityList Model, basically how the is the To-do List

    #activities;
    #activityView;

    constructor(activityView){
        this.#activities = []
        this.#activityView = activityView

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
    
    editActivity(id,li,span){
        for(let i = 0; i < this.#activities.length; i++){
            if(this.#activities[i].id == id){
                this.#activities[i].activityType = 'editing'
                this.#activities[i].icons = this.#activities[i].activityType
                this.#activityView.editingListItem(li,this.#activities[i],span)
                console.log(this.#activities[i])
                //console.log(this.#activities[i].activity)
                //console.log(this.#activities[i].activityType)
                //console.log(this.#activities[i].icons)
            }
        }
    }
}