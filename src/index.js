module.exports = function toReadable (number) {
   let second_category = number%10;  
   let thents = Math.floor(number / 10) - 2;
   
   let second_category_thou = number%100; 
   let thents_thou = Math.floor(number / 100) - 2;
     
   const HOUNDRED = 'hundred';
   const HOUNDRED_AND = 'hundred';
  
   const NUM_1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven','eight', 'nine', 'ten', 
                  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 
                  'nineteen' ];
   const NUM_2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
     
     
   // обрабатываем до 100
     if(number <= 19) {
         return  NUM_1[number].toString();
     }
     
     if(number > 19 && number < 100 && (number % 10) == 0) {
        return NUM_2[thents];   
     }
     else if(number > 19 && number < 100) {
         return NUM_2[thents].toString().concat(' ',NUM_1[second_category]);
     }
     
     
     
     
     
     
     // больше 99 
      if(number > 99 && number < 1000 && (number % 100) == 0) { // все больше 99 и меньше 1000 сотки
          return NUM_1[number / 100].concat(' ', HOUNDRED);
     }
     else if (second_category_thou <= 19) {
         return NUM_1[Math.floor(number / 100)].concat(' ', HOUNDRED_AND, ' ', NUM_1[second_category_thou].toString());   
     }// остаток от деления круглые числа
     else if( second_category_thou > 19 &&  second_category_thou < 100 && (second_category_thou % 10) == 0) {   
         return NUM_1[Math.floor(number / 100)].concat(' ', HOUNDRED_AND, ' ', NUM_2[second_category_thou / 10 - 2]);     
     }
     else if(second_category_thou > 19 &&  second_category_thou < 100) {
        return NUM_1[Math.floor(number / 100)].concat(' ', HOUNDRED_AND, ' ',NUM_2[Math.floor(second_category_thou / 10) - 2].toString(), ' ',NUM_1[second_category_thou % 10]);   
         
        
     }
};