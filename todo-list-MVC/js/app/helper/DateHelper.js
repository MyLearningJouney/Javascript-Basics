class DateHelper{

    constructor(){
    }

    dateToText(date){
        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} 
        - ${date.toLocaleString('en-us', {  weekday: 'long' })} at 
          ${date.getHours()}: ${date.getMinutes()}`
    }

}