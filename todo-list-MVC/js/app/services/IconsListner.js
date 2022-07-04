class IconListner{

    static iconListner(event){
        event.preventDefault();
        let icon = event.target
        console.log(icon)
    }

    delete(icon,obj){
        if(icon.className === 'fa-solid fa-trash'){
            console.log("LIXEIRA")
        }
    }

}

