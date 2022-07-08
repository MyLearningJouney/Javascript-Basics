class ActivityList{                                             //Here is the ActivityList Model, basically how the is the To-do List

    #activities;
    #activityView;

    constructor(activityView){
        this.#activities = []
        this.#activityView = activityView
    }
    
    get activities(){
        return this.#activities;
    }



    //-------------Creating Activity-------------//

    addActivity(ObjectActivity){
        this.#activities.push(ObjectActivity)
    }



    //-------------Completing Activity-------------//

    completeActivity(id,li){
        for(let i = 0; i < this.#activities.length; i++){
            if(this.#activities[i].id == id){
                this.#activities[i].activityType = 'complete'
                this.#activityView.completeListItem(li,this.#activities[i])
            }
        }
    }

    cancelCompleteActivity(id,li){
        for(let i = 0; i < this.#activities.length; i++){
            if(this.#activities[i].id == id){
                this.#activities[i].activityType = 'added'
                this.#activityView.cancelCompleteListItem(li,this.#activities[i])
            }
        }
    }

    

    //-------------Editing Activity-------------//

    editActivity(id,li,span){
        for(let i = 0; i < this.#activities.length; i++){
            if(this.#activities[i].id == id){
                this.#activities[i].activityType = 'editing'
                this.#activityView.editingListItem(li,this.#activities[i],span)
            }
        }

    confirmEditActivity(id,li,span){
        for(let i = 0; i < this.#activities.length; i++){
            if(this.#activities[i].id == id){
                this.#activities[i].activityType = 'added'
                this.#activityView.confirmEditingListItem(li,this.#activities[i],span)
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



    //-------------Removing Activity-------------//

    removeActivity(id,li){
        for(let i = 0; i < this.#activities.length; i++){
            if(this.#activities[i].id == id){
                this.#activities.splice(i,1)
                this.#activityView.deleteListItem(li)
            }
        }
    }
}