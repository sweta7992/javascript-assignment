// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    if (mass!=0 && height!=0){
        let BMI=(mass/(height*height));
         return Number(BMI);
 
     }
     else{
         return "INVALID INPUT";
     }
}

module.exports = BMICalculator;
