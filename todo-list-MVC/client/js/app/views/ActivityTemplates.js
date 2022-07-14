class ActivityTemplates{

    static activityTemplate(arrayOfActivities){
        for(let i = 0; i < arrayOfActivities.length; i++){
            if(arrayOfActivities[i].activityType == 'added'){
                arrayOfActivities[i].activityType = 'new'
                arrayOfActivities[i].icons = arrayOfActivities[i].activityType
                return`                                                                         
                ${arrayOfActivities.slice(-1).map((activity) => {
                    return ` 
                                <div class="listTextWrapper">
                                    <span class="listActivity">${activity.activity}</span>
                                    <span class="listDate">${activity.createdDate}</span>
                                    <span class="listCompletedDate hide">${activity.completedDate}</span>
        
                                </div>
                                <div class="listBtnWrapper">
                                    ${(Object.values(activity.icons[0])[0]).outerHTML}
                                    ${(Object.values(activity.icons[1])[0]).outerHTML}
                                    ${(Object.values(activity.icons[2])[0]).outerHTML}
                                </div>
                    `})                                                              
                }                                                                               
                `
                }
            if(arrayOfActivities[i].activityType == 'editing'){
                arrayOfActivities[i].icons = arrayOfActivities[i].activityType
                return`                                                                         
                ${arrayOfActivities.map((activity) => {
                    return ` 
                                <div class="listTextWrapper">
                                    <span class="listActivity hide">${activity.activity}</span>
                                    <span class="listDate">${activity.createdDate}</span>
                                    <span class="listCompletedDate hide">${activity.completedDate}</span>
        
                                </div>
                                <div class="listBtnWrapper">
                                    ${(Object.values(activity.icons[0])[0]).outerHTML}
                                    ${(Object.values(activity.icons[1])[0]).outerHTML}
                                    ${(Object.values(activity.icons[2])[0]).outerHTML}
                                </div>
                    `})                                                              
                }                                                                               
                `
            }
            if(arrayOfActivities[i].activityType == 'complete'){
                arrayOfActivities[i].icons = arrayOfActivities[i].activityType
                return`                                                                         
                ${arrayOfActivities.map((activity) => {
                    return ` 
                                <div class="listTextWrapper">
                                    <span class="listActivity strike">${activity.activity}</span>
                                    <span class="listDate hide">${activity.createdDate}</span>
                                    <span class="listCompletedDate">${activity.completedDate}</span>
        
                                </div>
                                <div class="listBtnWrapper">
                                    ${(Object.values(activity.icons[0])[0]).outerHTML}
                                    ${(Object.values(activity.icons[1])[0]).outerHTML}
                                    ${(Object.values(activity.icons[2])[0]).outerHTML}
                                </div>
                    `})                                                              
                }                                                                               
                `
            }
        }
    }
}




