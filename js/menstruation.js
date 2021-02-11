$( function() {
    var dateFormat = "mm/dd/yy",
      from = $( "#from" )
        .datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 1
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
  
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
  
      return date;
    }
  } );
// Used to calculate days of menstruation Cycle and difference between last period
function displayData() {
  var element = document.getElementById("resultclass");
  element.classList.add("w3-green");
  var startdate = document.getElementById("from");
  var enddate = document.getElementById("to");
  //var days = enddate- startdate;
  days = 7;

  document.getElementById('period_days').innerHTML = "Your last period was for "+ days +" days";
  if(days>5){
    document.getElementById('days_result').innerHTML = "(and it is "+ (days-5).toString() + " more days than usual)";
  }
  else
  {
    document.getElementById('days_result').innerHTML = "(and it is "+ (5-days).toString() + " less days than usual)";
  }
  var last_date = "07/01/2021";
  document.getElementById("compare_result").innerHTML = "Your last periods was on " + last_date.toString();
  
  //var cyclevalue = last_date-startdate;

  //setting default cycle value for dummy purpose
  var cyclevalue = 25;

  //checking is cycle value is usual, if not recommending to consult a doctor
  if(cyclevalue>35 || cyclevalue<27)
  {
    document.getElementById("final_result").innerHTML = "You should consult a doctor dear :) ";
  }
  else
  {
    document.getElementById("final_result").innerHTML = "Good to go! :) ";
  }

}