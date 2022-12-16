/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var costPerDay = 40;
var numberDays = 0;
var total=0;


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function buttonColorChange(event) {
    event.target.classList.toggle("clicked");
    if (event.target.classList.contains("clicked") && event.target.id!="half"&& event.target.id!="full"){
        numberDays++ ;
    }if(!event.target.classList.contains("clicked") && event.target.id!="half"&& event.target.id!="full"){numberDays--;}

    console.log(numberDays);
    
    var half = document.getElementById("half");
    var full = document.getElementById("full"); 
    if (event.target.id == "half" && full.classList.contains("clicked")) {
        full.classList.remove("clicked");
        costPerDay = 20;
    }
    if (event.target.id == "full" && half.classList.contains("clicked")) {
        half.classList.remove("clicked");
        costPerDay = 40;
    }
    calculateTotal();
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearDays(){
    document.getElementById("monday").classList.remove("clicked");
    document.getElementById("tuesday").classList.remove("clicked");
    document.getElementById("wednesday").classList.remove("clicked");
    document.getElementById("thursday").classList.remove("clicked");
    document.getElementById("friday").classList.remove("clicked");
    numberDays = 0;
    total = 0;
    calculateTotal();
}



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateTotal() {
    total = costPerDay * numberDays;
    document.getElementById("calculated-cost").innerHTML = total;
}
