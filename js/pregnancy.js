$( function() {
  $( "#datepicker" ).datepicker();
} );

function submitbutton() {
    var element = document.getElementById("resultclass");
    element.classList.add("w3-green");
  
    var datepick = document.getElementById("datepicker");
  
    //setting it up to a dummy value
    var date = "09/11/2021";
    
    //setting up and expectancy date ( add 240 days to the date value)
    document.getElementById('displayDate').innerHTML = "Your expectancy date is : " + date.toString();
  
  }