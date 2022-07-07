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

    hideButtons(activityObject,arrayOfsiblings){
        //console.log(arrayOfsiblings)
        arrayOfsiblings.map(liElement => liElement.innerHTML = this.template([activityObject]))
        //console.log(arrayOfsiblings[0].getElementsByClassName("listBtnWrapper"))
        //activityObject.icons.map((icon) => Object.values(icon)[0].classList.add("hide"))
        //console.log(Object.values(activityObject.icons[0])[0])
    }

    showButtons(activityObject,arrayOfsiblings){
        arrayOfsiblings.map(liElement => liElement.innerHTML = this.template([activityObject]))
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
