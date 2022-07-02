class IconHelper{

    constructor(){

    }

    createIcon(element){
        let completeIcon = document.createElement('i')
        completeIcon.className = 'fa-solid fa-check completeIcon'
        let editIcon = document.createElement('i')
        editIcon.className = 'fa-solid fa-pencil'
        let deleteIcon = document.createElement('i')
        deleteIcon.className = 'fa-solid fa-trash'
        element.prepend(deleteIcon)
        element.prepend(editIcon)
        element.prepend(completeIcon)
        return element
    }

    createEditIcon(element){
        let confirmEdit = document.createElement('i')
        confirmEdit.className = 'fa-solid fa-check'
        confirmEdit.classList.add("confirmEditIcon")
        let cancelEdit = document.createElement('i')
        cancelEdit.className = 'fa-solid fa-x'
        cancelEdit.classList.add("cancelEditIcon")
        element.prepend(cancelEdit)
        element.prepend(confirmEdit)
        element.querySelector(".fa-solid.fa-check.completeIcon").remove()
        element.querySelector(".fa-solid.fa-pencil").remove()
        element.querySelector(".fa-solid.fa-trash").classList.add("invisible")
        return element
    }

    cancelEditRemoveIcon(element){
        element.querySelector(".fa-solid.fa-trash.invisible").remove()
        element.querySelector(".fa-solid.fa-check.confirmEditIcon").remove()
        element.querySelector(".fa-solid.fa-x.cancelEditIcon").remove()
        return element
    }

    completeIconHidden(element){
        element.querySelector(".fa-solid.fa-pencil").classList.add("invisible")
        element.querySelector(".fa-solid.fa-trash").classList.add("invisible")
        return element
    }

    cancelCompleteIconHidden(element){
        element.querySelector(".fa-solid.fa-pencil").classList.remove("invisible")
        element.querySelector(".fa-solid.fa-trash").classList.remove("invisible")
        return element
    }

}



