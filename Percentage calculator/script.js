//define ids into js file
var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('XisWhatPercentOfY');

form.addEventListener('submit', function(event){
    if(!numField1.value || !numField2.value) 
        {
            alert("Please enter values in the fields!"); //no data in x and y
        }
    else{
        var x = parseFloat(numField1.value); //converts string to decimal
        var y = parseFloat(numField2.value);
        var result = (x/y) *100;
        //alert(result); alert and console.log converts decimal to str automatically
        //alert(x % y);
        resultField.innerText = "Answer: " + result + "%"; //innertext, print value of HTML object on file
        event.preventDefault();
    }


});
