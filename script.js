var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.write("Today is : " +  daylist[day] + ".");

var hour = today.getHours();
var minute = today.getMinutes();
var seconds = today.getSeconds();
var prepand = (hour >= 12)? "PM":"AM" ;
hour = (hour >= 12)? hour - 12: hour ;
if(hour === 0 && prepand === 'PM'){
    if(minute === 0 && second === 0){
        hour = 12 ;
        prepand = 'noon' ;
    }
    else{
        hour = 12 ;
        prepand = "PM" ;
    }
}

if(hour === 0 && prepand === "AM"){
    if(minute === 0 && second === 0){
        hour = 12 ;
        prepand = midnight ;

    }
    else{
        hour = 12 ;
        prepand = "AM" ;
    }
}

document.write("_________" +  "Current Time : "+hour + prepand + ":" + minute + ":"+ seconds);