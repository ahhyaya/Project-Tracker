var time;


time = setInterval(function () {
    $("#current-time").text(moment().format("H:mm:ss   ddd, MMM Do"));
},1000); 



$("#current-time").text(moment().format("H:mm ddd, MMM Do"));