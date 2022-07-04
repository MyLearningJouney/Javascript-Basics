class Activity{

    #activity;
    #activityType;
    #createdDate;
    #completedDate;
    #icons;

    constructor(activity) {

        this.#activity = activity
        this.#activityType = 'new'
        this.#createdDate = new DateHelper().dateToText(new Date(Date.now()));
        this.#completedDate = ''
        this.#icons = ListIconsFactory.createIcon(this.#activityType);

     }





     get activity(){
        return this.#activity;
     }




     get activityType(){
      return this.#activityType;
   }

     set activityType(str){
         if(str.match(/^(new|editing|complete)$/)){
            return this.#activityType = str
      }  else
            throw 'The ActivityType is invalid.'
   };




   get createdDate(){
      return this.#createdDate
   };




   get completedDate(){
      return this.#completedDate
   }

   set completedDate(date){
      return this.#completedDate = new DateHelper(dateToText(new Date(Date.now())))
   } 




   get icons(){
      return this.#icons
   }

   set icons(str){
      return this.#icons = this.#icons.createIcon(str)
   }

};