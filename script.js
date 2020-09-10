var audio = new Audio("reqd/tick.mp3");

function myFun(){
    var date = new Date();

    var deg = 6;
    let hh = date.getHours()*30;
    let mm = date.getMinutes()*deg;

    let ss = date.getSeconds() * deg;
    
    audio.play();
        

    
    $("#second").css("transform", 'rotate('+ss+ 'deg)');
	$("#minute").css("transform", 'rotate('+mm+ 'deg)');
	$("#hour").css("transform", 'rotate('+hh+ 'deg)');

   

}


setInterval(myFun,1000);