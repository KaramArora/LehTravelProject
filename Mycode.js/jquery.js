//var title = "My blog";
//var content = "This is my content";
//
//$("#blogTitlePreview").text(title);
//$("#blogContentPreview").text(content);

$('#flashMessage').hide();

$('.previewbutton').click(function () {
    var title = $('#blogTitleInput').val();
    var content = $('#blogContentInput').val();
    
    $("#blogTitlePreview").text(title);
    $("#blogContentPreview").text(content);
    
    $('#flashMessage')
      .slideDown(1000)
      .delay(3000)
      .slideUp(500);
});

$(window).scroll(function(){
    parallax();
})

function parallax() {
    
    var wScroll = $(window).scrollTop();
    
    $('.header').css('background-position', 'center '+(wScroll*0.75)+'px')
    
     $('.heading').css('top', 2+(wScroll*0.005)+'em')
    
    $('.carousel-card-textbox').css('top', 30+(wScroll*0.020)+'em')

}




$('.carousel').carousel({
  interval: 2000
});


//$('.logo').hide();


