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
        let arrayOfsiblings = []
        for(let i = 0; i < this.#activities.length; i++){
            if(this.#activities[i].id == id){
                this.#activities[i].activityType = 'editing'
                this.#activityView.editingListItem(li,this.#activities[i],span)
            }
            else{
                console.log('Pegou as outras listas')
                arrayOfsiblings.push(li.parentNode.children.item(this.#activities[i].id))
                //console.log(arrayOfsiblings)
                this.#activities[i].activityType = 'blocked'
                this.#activityView.hideButtons(this.#activities[i],arrayOfsiblings)
            }
        }
    }

    cancelEditActivity(id,li,span){
        console.log(this.#activities)
        for(let i = 0; i < this.#activities.length; i++){
            if(this.#activities[i].id == id){
                this.#activities[i].activityType = 'added'
                this.#activityView.cancelEditingListItem(li,this.#activities[i],span)
            }
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
}