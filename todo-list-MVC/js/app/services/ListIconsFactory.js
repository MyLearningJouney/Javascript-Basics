class ListIconsFactory{

    static createIcon(activityType){
        let icons = [];
        if(activityType == 'new'){
            let completeIcon = new CompleteIconFactory();
            let editIcon = new EditIconFactory();
            let deleteIcon = new DeleteIconFactory();
            icons.push(completeIcon)
            icons.push(editIcon)
            icons.push(deleteIcon)
            return icons
        }
        if(activityType == 'editing'){
            let confirmEdit = new ConfirmEditFactory();
            let cancelEdit = new CancelEditFactory();
            let deleteIcon = new DeleteIconFactory();
            Object.values(deleteIcon)[0].classList.add("invisible")
            icons.push(confirmEdit)
            icons.push(cancelEdit)
            icons.push(deleteIcon)
            return icons
        }
        if(activityType == 'complete'){
            let cancelIcon = new CancelCompleteIconFactory();
            let editIcon = new EditIconFactory();
            Object.values(editIcon)[0].classList.add("invisible")
            let deleteIcon = new DeleteIconFactory();
            Object.values(deleteIcon)[0].classList.add("invisible")
            icons.push(cancelIcon)
            icons.push(editIcon)
            icons.push(deleteIcon)
            return icons
        }
    }

}



