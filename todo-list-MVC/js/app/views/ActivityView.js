class ActivityView{
    #list

    constructor(list){
        this.#list = list
    }

    template(ActivityList){ 

        return`                                                                         
         ${ActivityList.activities.slice(-1).map((n) => {
             return ` 
                         <div class="listTextWrapper">
                             <span class="listActivity">${n.activity}</span>
                             <span class="listDate">${n.createdDate}</span>
                             <span class="listCreatedDate hide">${n.createdDate}</span>

                         </div>
                         <div class="listBtnWrapper">
                             ${(Object.values(n.icons[0])[0]).outerHTML}
                             ${(Object.values(n.icons[1])[0]).outerHTML}
                             ${(Object.values(n.icons[2])[0]).outerHTML}
                         </div>
             `})                                                              
         }                                                                               
     `
    };
    update(ActivityList){
        let li = document.createElement('li')
        li.classList.add('listItem')
        li.innerHTML = this.template(ActivityList)
        this.#list.append(li)
        li.addEventListener("click", IconListner.iconListner)
    }
}