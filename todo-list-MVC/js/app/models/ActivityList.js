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
                this.#activityView.editingListItem(li,this.#activities[i],span)
            }
        }
    }

    cancelEditActivity(id,li,span){
        for(let i = 0; i < this.#activities.length; i++){
            if(this.#activities[i].id == id){
                this.#activities[i].activityType = 'added'
                this.#activityView.cancelEditingListItem(li,this.#activities[i],span)
            }
        }

    }
}