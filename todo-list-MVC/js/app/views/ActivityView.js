class ActivityView{
    #list

    constructor(list){
        this.#list = list
    }

    template(ActivityList){
        return ActivityTemplates.activityTemplate(ActivityList.activities)
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
    createListItem(ActivityList){
        let li = document.createElement('li')
        li.classList.add('listItem')
        li.classList.add(`${ActivityList.activities.slice(-1).map((n) => n.id)}`)
        li.innerHTML = this.template(ActivityList)
        this.#list.append(li)
        //console.log(this.#list)//html
        //console.log(ActivityList)//objeto
    }

    editingListItem(li,Activity,span){
        span.classList.add("hide")
        let input = document.createElement('input')
        this.setEditInputAttributes(Activity.activity,input)
        li.innerHTML = this.template(Activity)
        li.children[0].prepend(input)
    }


    setEditInputAttributes(str,element){
        const attributes = {
            type: 'text',
            name: 'edit-input',
            id: 'edit-input',
            value: str,
            autofocus: true,
            required: true
        }   
        return Object.keys(attributes).forEach(key => element.setAttribute(key,attributes[key]))
    }
}
