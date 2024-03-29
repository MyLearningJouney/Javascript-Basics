class IconBehavior{

    static iconBehavior(event,ActivityList){
        this.event = event
        this.icon = this.event.target
        this.btnWrapper = this.icon.parentNode;
        this.li = this.btnWrapper.parentNode;
        this.textWrapper = this.li.children[0]
        this.text = this.textWrapper.children[0]
        this.htmlId = this.li.className.replace(/\D/g, '')
        this.ActivityList = ActivityList



        //-------------Completing Activity-------------//

        if(this.icon.className === 'fa-solid fa-check completeIcon'){
            ActivityList.completeActivity(this.htmlId,this.li)
        }
        if(this.icon.className === 'fa-solid fa-x'){
            ActivityList.cancelCompleteActivity(this.htmlId,this.li)
        }



        //-------------Editing Activity-------------//

        if(this.icon.className === 'fa-solid fa-pencil'){
            ActivityList.editActivity(this.htmlId, this.li,this.text)
        }
        if(this.icon.className === 'fa-solid fa-x cancelEditIcon'){
            ActivityList.cancelEditActivity(this.htmlId, this.li,this.text)
        }
        if(this.icon.className === 'fa-solid fa-check confirmEditIcon'){
            ActivityList.confirmEditActivity(this.htmlId, this.li,this.text)
        }



        //-------------Deleting Activity-------------//

        if(this.icon.className === 'fa-solid fa-trash'){
            ActivityList.removeActivity(this.htmlId,this.li)

        }
        
    }     
}