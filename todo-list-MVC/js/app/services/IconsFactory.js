class CompleteIconFactory {
    constructor(){
        this.completeIcon = document.createElement('i')
        this.completeIcon.className = 'fa-solid fa-check completeIcon'        
    }
}

class CancelCompleteIconFactory {
    constructor(){
        this.CancelCompleteIcon = document.createElement('i')
        this.CancelCompleteIcon.className = 'fa-solid fa-x'
    }
}

class EditIconFactory {
    constructor(){
        this.editIcon = document.createElement('i')
        this.editIcon.className = 'fa-solid fa-pencil'
    }
}

class ConfirmEditFactory {
    constructor(){
        this.confirmEdit = document.createElement('i')
        this.confirmEdit.className = 'fa-solid fa-check'
        this.confirmEdit.classList.add("confirmEditIcon")
    }
}

class CancelEditFactory {
    constructor(){
        this.cancelEdit = document.createElement('i')
        this.cancelEdit.className = 'fa-solid fa-x'
        this.cancelEdit.classList.add("cancelEditIcon")
    }
}

class DeleteIconFactory {
    constructor(){
        this.deleteIcon = document.createElement('i')
        this.deleteIcon.className = 'fa-solid fa-trash'
    }
    
}