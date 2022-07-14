class DateHelper{

    constructor(){
    }

    dateToText(date){
        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} 
        - ${date.toLocaleString('en-us', {  weekday: 'long' })} at 
          ${date.getHours()}: ${date.getMinutes()}`
    }

    datePicker(date){
        return date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) +
        '-' + date.getDate().toString().padStart(2, 0); 
    }

}
