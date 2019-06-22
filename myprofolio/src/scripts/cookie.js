$(document).ready(function(){
    var counter=0
    var increment = 1;
    
$("#cookie").click(function(){
    counter += increment;
    $("#counter").html("<h1>You have "+counter+" cookies");
if (counter>=20){
    increment = 2;
}

})
})