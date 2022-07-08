class ActivityView{
    #list

    constructor(list){
        this.#list = list
    }



    //-------------Creating Activity-------------//
    
    createListItem(arrayOfActivities){
        let li = document.createElement('li')
        li.classList.add('listItem')
        li.classList.add(`${arrayOfActivities.slice(-1).map((n) => n.id)}`)
        console.log(arrayOfActivities)
        li.innerHTML = this.applyTemplate(arrayOfActivities.slice(-1))
        this.#list.append(li)
        setTimeout(function() {
            li.classList.add("show")
          }, 50);
    }



    //-------------Completing Activity-------------//

    completeListItem(li,activityObject){
        li.classList.add("completedActivity")
        activityObject.completedDate = new Date(Date.now())
        li.innerHTML = this.applyTemplate([activityObject])
    }
        
    cancelCompleteListItem(li,activityObject){
        li.classList.remove("completedActivity")
        li.innerHTML = this.applyTemplate([activityObject])
    }



    //-------------Editing Activity-------------//

    editingListItem(li,activityObject,span){
        span.classList.add("hide")
        let input = document.createElement('input')
        this.setEditInputAttributes(activityObject.activity,input)
        li.innerHTML = this.applyTemplate([activityObject])
        li.children[0].prepend(input)
        li.classList.add("editingActivity");
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
        li.innerHTML = this.applyTemplate([activityObject])
        document.querySelector('form').classList.remove('hide')
    }

    confirmEditingListItem(li,activityObject,span){
        activityObject.activity = li.querySelector('input').value
        li.querySelector('input').remove()
        span.classList.remove("hide")
        li.innerHTML = this.applyTemplate([activityObject])
        document.querySelector('form').classList.remove('hide')
    }



    //-------------Deleting Activity-------------//

    deleteListItem(li){
        setTimeout(function() {
            li.classList.remove("show");
          }, 10);
        setTimeout(function() {
            li.remove()
        }, 400);
    }



    //-------------Applying Template-------------//

    applyTemplate(arrayOfActivities){
        return ActivityTemplates.activityTemplate(arrayOfActivities)
    };
}
