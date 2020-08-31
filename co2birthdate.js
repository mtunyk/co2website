function onReady(){
  document.addEventListener('DOMContentLoaded', function(event) {
    console.log("DOM Content Loaded!"); //the event occurred
    inputWatch();
  });
};
onReady();

// check key input; ensure key event key is numeric, (, ), -, ArrowLeft, ArrowRight, Delete, or Backspace
// if key input is in the accepted values, return key input.
function checkPhoneKey(key) {
  return (key >= '0' && key <= '9') || key == '+' || key == '(' || key == ')' || key == '-' ||
    key == 'ArrowLeft' || key == 'ArrowRight' || key == 'Delete' || key == 'Backspace';
};

// trigger modal alerting user of key input error
// show them what they typed, show them what is allowed
function inputError(val){
  console.log("USER INPUT ERROR!");
  console.log("event key: "+val);
  // show modal dialog where the input was incorrectly filled in
  // destroy/erase once user starts typing again
};

function inputWatch(){
  console.log("Input Watch inside onReady!");
  var inputBirthYear = document.getElementById("input-birth-year");
  // var inputBirthMonth = document.getElementById("input-birth-month");
  // var inputBirthDay = document.getElementById("input-birth-day");


  var formInputs = document.getElementsByClassName("input-date");
  for(var x = 0; x<formInputs.length; x++){
    
  };

  /**
  var formInputsAll = document.querySelectorAll(".input-date").forEach(item => {
    item.addEventListener("keydown", event => {
      // handle click
    });
  });
  **/
  // watch input for keydown events
  // on keydown events, ensure the key is numeric/utility; if the key is, carry on
  // do not allow any key deviating from acceptable list to fire off, aka show key value in the input to the user
  // if a key deviation is attempted, show error message to user
  inputBirthYear.addEventListener("keydown", function(event) {
    console.log("event key: "+event.key);
    if(!checkPhoneKey(event.key)){
      event.preventDefault();
      // trigger error message saying numbers only...maybe just highlight the input via outline?
      inputError(event.key);



      
    };
    



    showOutput(event.key);
  });

  // watch until value is 4 characters
  // make sure they're numbers OR only allow numbers
  // make sure the number is valid value corresponded to with annual data
  // if 4 char value conforms, add '-' to input, placing focus after
  // repeat when character is 6, and also at 8 values.
  
  
  
  
  
};




/**
**
** dev only
**
**/

// create function to output results into output element
var htmlOutput = document.getElementById('output');

function showOutput(eventkey){
  console.log("Show Output Function! event.key: "+eventkey);

};
// showOutput();

