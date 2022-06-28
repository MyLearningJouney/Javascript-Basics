class ActivityView{                                                                     //The View in the MVC model hold the responsability to control how the
    #list                                                                               //user will see and what it will be displayed to him. 

    constructor(list){                                                                  //In the constructor it's need to known where the elements will be displeyed
        this.#list = list                                                               //In this case, it need to be known in what list the list elementes need to be add 
    }

    template(ActivityList){
        return` 
        ${ActivityList.activities.map((n) => {
            return ` 
                    <li>
                        <div>
                            <span>${n.activity}</span>
                            <span>${n.date}</span>
                        </div>
                        <div>
                            <i class="fa-solid fa-check"></i>
                            <i class="fa-solid fa-pencil"></i>
                            <i class="fa-solid fa-trash"></i>
                        </div>
                    </li> 
            `}).join('')
        }
    `};
    

    update(ActivityList){
        this.#list.innerHTML = this.template(ActivityList)
    }
}   
