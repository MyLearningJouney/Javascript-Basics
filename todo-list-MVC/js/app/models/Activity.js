class Activity{                                             //Here is the activity Model, the model basically is some kind of object 
                                                            //mold, here we define the attributs of the object, and the methods. We can
    #activity;                                              //think the model like we imagine a car. The car have some attributs like 
    #date;
    #createdDate;                                                   //color, size, hp and also have some methods like, how start, how drive and
                                                            //so on;
    constructor(activity) {

        this.#activity = activity
        this.#createdDate = new Date(Date.now())
        this.#date = new Date(Date.now());

     }

     get activity(){
        return this.#activity;
     }

     get date(){
        return `${this.#date.getDate()}/${this.#date.getMonth()}/${this.#date.getFullYear()} 
        - ${this.#date.toLocaleString('en-us', {  weekday: 'long' })} at 
          ${this.#date.getHours()}: ${this.#date.getMinutes()}`
     };

     get createdDate(){
      return `${this.#date.getDate()}/${this.#date.getMonth()}/${this.#date.getFullYear()} 
      - ${this.#date.toLocaleString('en-us', {  weekday: 'long' })} at 
        ${this.#date.getHours()}: ${this.#date.getMinutes()}`
   };   
}
