class ActivityView{                                                                     //The View in the MVC model hold the responsability to control how the
    #list                                                                               //user will see and what it will be displayed to him. 

    constructor(list){                                                                  //In the constructor it's need to known where the elements will be displeyed
        this.#list = list                                                               //In this case, it need to be known in what list the list elementes 
    }                                                                                   //need to be add.

    template(ActivityList){                                                             //For the view, i've created an method called template, to define the  
                                                                                        //elements inside every <li> element, like the span and icons. 
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
                                                                                        //Every time the template method is called, it will receive a list of
                                                                                        //activities. As it defined in ActivityList Model, an Activity List  
                                                                                        //consistis in an Array of Objects 'Activity' defined by the Activity
    update(ActivityList){                                                               //Model. So, every time its added one activity at submit, this activity
        this.#list.innerHTML = this.template(ActivityList)                              //are added to the ActivityList Array by the addActivity method. This 
    }                                                                                   //Array, in turn, need to be changed in a way that the DOM could 
}                                                                                       //understand and show the list. Thats why we use Template String and
                                                                                        //the map function from arrays. For every Element in the ActivityList
                                                                                        //Array, the template will be apllied, and joined in one big array with
                                                                                        //<li> elements inside. 
                                                                                        //To update, we have to use the innerHTML method and put inside the list 
                                                                                        //element. Here we cant use appendChild() method becausa appendChild only  
                                                                                        //accept elements. 