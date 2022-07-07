class ActivityView{
    #list

    constructor(list){
        this.#list = list
    }

    template(arrayOfActivities){
        return ActivityTemplates.activityTemplate(arrayOfActivities)
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
        li.children[0].prepend(input)
        document.querySelector('form').classList.add('hide')
    }

    hideButtons(arrayOfActivities,btnWrapper,id){
        for(let i = 0; i < arrayOfActivities.length; i++){
            if(arrayOfActivities[i].id != id){
                console.log(Object.values(arrayOfActivities[i].icons[0]))
                return
            }
        }
        //console.log(btnWrapper)
        //console.log("Oi")
        //btnWrapper.classList = 'hide'
    }
    
    showButtons(btnWrapper){
        btnWrapper.classList.remove('hide')
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

    confirmEditingListItem(li,activityObject,span){
        console.log(activityObject)
        activityObject.activity = li.querySelector('input').value
        span.classList.remove("hide")
        li.innerHTML = this.template([activityObject])
        document.querySelector('form').classList.remove('hide')
    }

    cancelEditingListItem(li,activityObject,span){
        li.querySelector('input').remove()
        span.classList.remove("hide")
        li.innerHTML = this.template([activityObject])
        document.querySelector('form').classList.remove('hide')
    }
}
