class IconListner{

    static iconListner(event){
        event.preventDefault();
        let icon = event.target
        let btnWrapper = icon.parentNode;
        let li = btnWrapper.parentNode;
        let id = li.className.replace(/\D/g, '')
        console.log(id)
    }


    delete(icon,obj){
        if(icon.className === 'fa-solid fa-trash' && obj.id == id){
            console.log("LIXEIRA")
        }
    }

}

