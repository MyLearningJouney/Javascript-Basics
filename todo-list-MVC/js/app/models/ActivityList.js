class ActivityList{                                             //Here is the ActivityList Model, basically how the is the To-do List

    #activities;

    constructor(list){
        this.#activities = []

    }

    addActivity(activity){
        this.#activities.push(activity)
        console.log(this.#activities)
        console.log((Object.values(this.#activities[0].icons[0])[0]).outerHTML)
    }


    get activities(){
        return this.#activities;
    }

    

}