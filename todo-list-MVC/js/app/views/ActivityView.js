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
        console.log(arrayOfActivities)
        li.innerHTML = this.template(arrayOfActivities.slice(-1))
        this.#list.append(li)
    }

    editingListItem(li,activityObject,span){
        span.classList.add("hide")
        let input = document.createElement('input')
        this.setEditInputAttributes(activityObject.activity,input)
        li.innerHTML = this.template([activityObject])
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

    cancelEditingListItem(li,activityObject,span){
        li.querySelector('input').remove()
        span.classList.remove("hide")
        li.innerHTML = this.template([activityObject])
        document.querySelector('form').classList.remove('hide')
    }

    confirmEditingListItem(li,activityObject,span){
        activityObject.activity = li.querySelector('input').value
        li.querySelector('input').remove()
        span.classList.remove("hide")
        li.innerHTML = this.template([activityObject])
        document.querySelector('form').classList.remove('hide')
    }
}
