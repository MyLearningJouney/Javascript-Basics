class IconBehavior{

    static iconBehavior(event,list){
        this.event = event
        this.icon = this.event.target
        this.btnWrapper = this.icon.parentNode;
        this.li = this.btnWrapper.parentNode;
        this.textWrapper = this.li.children[0]
        this.text = this.textWrapper.children[0]
        this.htmlId = this.li.className.replace(/\D/g, '')
        if(this.icon.className === 'fa-solid fa-trash'){
            list.removeActivity(this.htmlId)
            this.li.remove()
        }
        if(this.icon.className === 'fa-solid fa-pencil'){
            list.editActivity(this.htmlId, this.li,this.text)
            console.log()
        }
    }
        
}