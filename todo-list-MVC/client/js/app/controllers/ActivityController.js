class ActivityController {

    #inputActivity;#activitiesList; 
                         

    constructor(){

        this.#inputActivity = document.querySelector('#insert-list');
        this.activityView = new ActivityView(document.querySelector('#todolist'));
        this.#activitiesList = new ActivityList(this.activityView);
        this.addBtn = this.btnListner(document.querySelector('button'))
        this.currentDate = this.getCurrentDate(new Date(Date.now()), document.querySelector("#date-list"))
        
    }


    insertActivity (event){
        event.preventDefault();
        this.#activitiesList.addActivity(this.createActivity())
        this.activityView.createListItem(this.#activitiesList.activities);
        let li = document.querySelectorAll('li')
        li[li.length-1].addEventListener("click", e => {
            e.preventDefault()
            IconBehavior.iconBehavior(e,this.#activitiesList)
        })
    }


    createActivity(){
        return new Activity(this.#inputActivity.value);

    }

    btnListner(addBtn){
        addBtn.addEventListener("mouseover", () => 
            addBtn.classList.add("fa-lg")
        )
        addBtn.addEventListener("mouseout", () => 
        addBtn.classList.remove("fa-lg")
        )
    }

    getCurrentDate(date,input){
        date = new DateHelper().datePicker(date)
        input.value = date
        return date
    }
}