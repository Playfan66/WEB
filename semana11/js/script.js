$( "#right" ).click(function() {
  $( "img" ).animate({ "left": "+=200px" }, "fast" );
});
 
$( "#left" ).click(function(){
  $( "img" ).animate({ "left": "-=200px" }, "fast" );
});