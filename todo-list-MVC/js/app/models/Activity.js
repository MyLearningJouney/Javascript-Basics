class Activity{

   #id;
   #activity;
   #activityType;
   #createdDate;
   #completedDate;
   #icons;

   static idCounter = 0

   constructor(activity) {

      this.#id = Activity.idCounter++
      this.#activity = activity
      this.#activityType = 'added'
      this.#createdDate = new DateHelper().dateToText(new Date(Date.now()));
      this.#completedDate = ''
      this.#icons = ListIconsFactory.createIcon(this.#activityType);

   }





   get id(){
      return this.#id;
   }



   
   get activity(){
      return this.#activity;
   }

   set activity(str){
      return this.#activity = str
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
      return this.#completedDate = new DateHelper(dateToText(date))
   } 




   get icons(){
      return this.#icons
   }

   set icons(str){
      return this.#icons = ListIconsFactory.createIcon(str)
   }

};
