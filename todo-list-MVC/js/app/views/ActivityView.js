class ActivityView{
    #list

    constructor(list){
        this.#list = list
    }

    template(arrayOfActivities){
        return ActivityTemplates.activityTemplate(arrayOfActivities)
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
    createListItem(arrayOfActivities){
        let li = document.createElement('li')
        li.classList.add('listItem')
        li.classList.add(`${arrayOfActivities.slice(-1).map((n) => n.id)}`)
        li.innerHTML = this.template(arrayOfActivities)
        this.#list.append(li)
        //console.log(this.#list)//html
        //console.log(ActivityList)//objeto
    }

    editingListItem(li,activityObject,span){
        span.classList.add("hide")
        let input = document.createElement('input')
        this.setEditInputAttributes(activityObject.activity,input)
        li.innerHTML = this.template([activityObject])
        //li.innerHTML = this.template(a)
        li.children[0].prepend(input)
        document.querySelector('form').classList.add('hide')
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
