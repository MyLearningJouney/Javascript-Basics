class EditInputHelper {

    constructor(){
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
        //return console.log(Object.keys(attributes).forEach(key => 
        //    console.log(key,attributes[key])
        //));
    }
}