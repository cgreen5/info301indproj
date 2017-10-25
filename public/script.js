
function calcTotal() {
  var mealTotal = 0;
  var salesTax = .06;
  var items = document.getElementsByTagName("input");
  
  for(var i =0; i<4; i++){
    
  if(items[i].checked)
    {
      mealTotal += (items[i].value *1);
    }
    
    
    
  }
  
mealTotal *= 1 + salesTax;
document.getElementById("total").innerHTML = "Your taste of heaven will be $" + mealTotal.toFixed(2);
}



var submitButton = document.getElementById("sButton");
if (submitButton.addEventListener) {
  submitButton.addEventListener("click", calcTotal, false);
} else if (submitButton.attachEvent){
  submitButton.attachEvent("onClick", calcTotal);
}
