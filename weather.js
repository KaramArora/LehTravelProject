$(document).ready(function(){
   $('#submitweather').click(function(){
       var city = $('#city').val();
       
       if(city != '') {
          
           $.ajax({
              url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=aa5341c655e40f1936db05b05b5a064c", 
              dataType: "json",
              type: "GET",
              success: function(data){
                  var widget = show(data);
                  
                  $("#show").html(widget);
                  
                  $("#city").val('');
              }   
               
           });
           
          }else{
              $('#error').html('field cannot be empty');
          }
   }); 
});

function show(data) {
    return "<h3><strong>Weather</strong>: "+ data.weather[0].main +"</h3>" +
           "<h3><strong>Description</strong>: "+ data.weather[0].description +"</h3>";
}