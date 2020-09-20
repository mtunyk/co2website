function onReady(){
  document.addEventListener('DOMContentLoaded', function(event) {
    console.log("DOM Content Loaded!"); //the event occurred
    inputWatch();
  });
};
onReady();

var inputBirthYear = document.getElementById("input-birth-year");
var inputBirthMonth = document.getElementById("input-birth-month");
var inputBirthDay = document.getElementById("input-birth-day");
var formInputs = document.getElementsByClassName("input-date");
var inputSubmit = document.getElementById("input-submit");
var htmlForm = document.getElementById("form-birthday");

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
  console.log("Input Watch inside onReady XXX!");

  // watch input for keydown events
  // on keydown events, ensure the key is numeric/utility; if the key is, carry on
  // do not allow any key deviating from acceptable list to fire off, aka show key value in the input to the user
  // if a key deviation is attempted, show error message to user
  inputBirthYear.addEventListener("keydown", function(event) {
    // console.log("event key: "+event.key+", event value: "+this.value);
    if(!checkPhoneKey(event.key)){
      event.preventDefault();
      // trigger error message saying numbers only...maybe just highlight the input via outline?
      inputError(event.key);
    };
  });

  // count length of value in input.value
  // when it reaches desired length, remove disabled attribute from next input
  // then pass focus to the new undisabled input
  inputBirthYear.addEventListener("keyup", function(event) {
    console.log("event key: "+event.key+", event value: "+this.value);
    // on keyup, grab value of input, check its length
    // var valueLength = inputBirthYear.value.length;
    console.log("value: "+inputBirthYear.value+", value length: "+inputBirthYear.value.length);

    if(inputBirthYear.value.length < 4){
    } else {
      removeAttribute(inputBirthMonth);
      setFocus(inputBirthMonth);
    };

  });




  inputBirthMonth.addEventListener("keydown", function(event) {
    if(!checkPhoneKey(event.key)){
      event.preventDefault();
      inputError(event.key);
    };
  });
  inputBirthMonth.addEventListener("keyup", function(event) {
    if(inputBirthMonth.value.length < 2){
    } else {
      removeAttribute(inputBirthDay);
      setFocus(inputBirthDay);
    };
  });

  inputBirthDay.addEventListener("keydown", function(event) {
    if(!checkPhoneKey(event.key)){
      event.preventDefault();
      inputError(event.key);
    };
  });
  inputBirthDay.addEventListener("keyup", function(event) {
    if(inputBirthDay.value.length < 2){

    } else {
      removeAttribute(inputSubmit);
      setFocus(inputSubmit);
    };
  });



  // watch until value is 4 characters
  // make sure they're numbers OR only allow numbers
  // make sure the number is valid value corresponded to with annual data
  // if 4 char value conforms, add '-' to input, placing focus after
  // repeat when character is 6, and also at 8 values.
  
  
  htmlForm.addEventListener("submit", formSubmit)
  
  
};


function removeAttribute(ele){
  console.log("remove attribute!");
  ele.disabled = false;
};

function setFocus(ele){
  console.log("set focus!");
  ele.focus();
};


// on form submission, redirect to appropriate page based off user input
function formSubmit(event){
  event.preventDefault();
  console.log("on submit!");
  console.log("Year: "+inputBirthYear.value+" Month: "+inputBirthMonth.value+" Day: "+inputBirthDay.value);
  var birthdayURL = "/d/"+inputBirthYear.value+"/"+inputBirthMonth.value+"/"+inputBirthDay.value+"/index.html";
  console.log("Birthday URL: "+birthdayURL);
  window.location.replace(birthdayURL);
};


// toggle and/or remove disabled attribute
function toggleAttribute(){
  console.log("Toggle Attribute!");
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

