
// adds the current time underneath the block
var current=document.querySelector("#currentDay");
time=moment();
current.textContent=time.format("dddd, MMMM Do");

currentHour=moment().format("H");
hour=parseInt(currentHour);
console.log(hour);



// look for for each function java 
var adding =document.querySelector("time-block");




times=[];

function pushArray(){
    var filterItems = document.querySelectorAll(".trial");
    for (var i = 0; i < filterItems.length; i++) {
      const innerHtml = filterItems[i].innerHTML;
      times.push(innerHtml);
    }
  }
pushArray();





switch (hour){
    
    case 9:
    $( "#hardcode1" ).addClass( "present" );
    $( "#hardcode2" ).addClass( "future" );
    $( "#hardcode3" ).addClass( "future" );
    $( "#hardcode4" ).addClass( "future" );
    $( "#hardcode5" ).addClass( "future" );
    $( "#hardcode6" ).addClass( "future" );
    $( "#hardcode7" ).addClass( "future" );
    $( "#hardcode8" ).addClass( "future" );
    $( "#hardcode9" ).addClass( "future" );
    break;

    case 10:
        $( "#hardcode1" ).addClass( "past" );
        $( "#hardcode2" ).addClass( "present" );
        $( "#hardcode3" ).addClass( "future" );
        $( "#hardcode4" ).addClass( "future" );
        $( "#hardcode5" ).addClass( "future" );
        $( "#hardcode6" ).addClass( "future" );
        $( "#hardcode7" ).addClass( "future" );
        $( "#hardcode8" ).addClass( "future" );
        $( "#hardcode9" ).addClass( "future" );
    break;

    case 11:
        $( "#hardcode1" ).addClass( "past" );
        $( "#hardcode2" ).addClass( "past" );
        $( "#hardcode3" ).addClass( "present" );
        $( "#hardcode4" ).addClass( "future" );
        $( "#hardcode5" ).addClass( "future" );
        $( "#hardcode6" ).addClass( "future" );
        $( "#hardcode7" ).addClass( "future" );
        $( "#hardcode8" ).addClass( "future" );
        $( "#hardcode9" ).addClass( "future" );
    break;
    
    case 12:
        $( "#hardcode1" ).addClass( "past" );
        $( "#hardcode2" ).addClass( "past" );
        $( "#hardcode3" ).addClass( "past" );
        $( "#hardcode4" ).addClass( "present" );
        $( "#hardcode5" ).addClass( "future" );
        $( "#hardcode6" ).addClass( "future" );
        $( "#hardcode7" ).addClass( "future" );
        $( "#hardcode8" ).addClass( "future" );
        $( "#hardcode9" ).addClass( "future" );
    break;

    case 13:
        $( "#hardcode1" ).addClass( "past" );
        $( "#hardcode2" ).addClass( "past" );
        $( "#hardcode3" ).addClass( "past" );
        $( "#hardcode4" ).addClass( "past" );
        $( "#hardcode5" ).addClass( "present" );
        $( "#hardcode6" ).addClass( "future" );
        $( "#hardcode7" ).addClass( "future" );
        $( "#hardcode8" ).addClass( "future" );
        $( "#hardcode9" ).addClass( "future" );
    break;

    case 14:
        $( "#hardcode1" ).addClass( "past" );
        $( "#hardcode2" ).addClass( "past" );
        $( "#hardcode3" ).addClass( "past" );
        $( "#hardcode4" ).addClass( "past" );
        $( "#hardcode5" ).addClass( "past" );
        $( "#hardcode6" ).addClass( "present" );
        $( "#hardcode7" ).addClass( "future" );
        $( "#hardcode8" ).addClass( "future" );
        $( "#hardcode9" ).addClass( "future" );
    break;

    case 15:
        $( "#hardcode1" ).addClass( "past" );
        $( "#hardcode2" ).addClass( "past" );
        $( "#hardcode3" ).addClass( "past" );
        $( "#hardcode4" ).addClass( "past" );
        $( "#hardcode5" ).addClass( "past" );
        $( "#hardcode6" ).addClass( "past" );
        $( "#hardcode7" ).addClass( "present");
        $( "#hardcode8" ).addClass( "future" );
        $( "#hardcode9" ).addClass( "future" );
    break;

    case 16:
        $( "#hardcode1" ).addClass( "past" );
        $( "#hardcode2" ).addClass( "past" );
        $( "#hardcode3" ).addClass( "past" );
        $( "#hardcode4" ).addClass( "past" );
        $( "#hardcode5" ).addClass( "past" );
        $( "#hardcode6" ).addClass( "past" );
        $( "#hardcode7" ).addClass( "past");
        $( "#hardcode8" ).addClass( "present" );
        $( "#hardcode9" ).addClass( "future" );
    break;

    case 17:
        $( "#hardcode1" ).addClass( "past" );
        $( "#hardcode2" ).addClass( "past" );
        $( "#hardcode3" ).addClass( "past" );
        $( "#hardcode4" ).addClass( "past" );
        $( "#hardcode5" ).addClass( "past" );
        $( "#hardcode6" ).addClass( "past" );
        $( "#hardcode7" ).addClass( "past");
        $( "#hardcode8" ).addClass( "past" );
        $( "#hardcode9" ).addClass( "present" );
    break;

    default:
        $( "#hardcode1" ).addClass( "past" );
        $( "#hardcode2" ).addClass( "past" );
        $( "#hardcode3" ).addClass( "past" );
        $( "#hardcode4" ).addClass( "past" );
        $( "#hardcode5" ).addClass( "past" );
        $( "#hardcode6" ).addClass( "past" );
        $( "#hardcode7" ).addClass( "past");
        $( "#hardcode8" ).addClass( "past" );
        $( "#hardcode9" ).addClass( "past" );
    break;

};


$(".saveBtn").on("click",function(){
    var value = $(this)
    .siblings(".description").val();

    var time = $(this).parent().attr("id");
    console.log(value,time);
    localStorage.setItem(time,value)

})

$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
  
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour1 .description").val(localStorage.getItem("hour1"));
$("#hour2 .description").val(localStorage.getItem("hour2"));
$("#hour3 .description").val(localStorage.getItem("hour3"));
$("#hour4 .description").val(localStorage.getItem("hour4"));
$("#hour5 .description").val(localStorage.getItem("hour5"));




// failed attempt here
// if( currentHour == "11PM"){
//     console.log("true");
//     $( "#hardcode1" ).addClass( "present" );
//     $( "#hardcode2" ).addClass( "future" );


// }

// else if(currentHour > times[0]){
//     console.log("nope");
//     $( ".1" ).addClass( "future" );
// }



// for (i=0; i<times.length;i++){

//     {if( hour == times[i]){
//         console.log("true");
//         $( ".1" ).addClass( "present" );
//     }
    
//     else if(hour > times[i]){
//         $( ".1" ).addClass( "future" );
//     }
    
//     else {
//      console.log("nope");
//         $( ".1" ).addClass( "past" );
//     }
//     };

// };







