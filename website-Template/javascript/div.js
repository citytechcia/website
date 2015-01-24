$( document ).ready( function(){
  $( "#slow" ).show ( "slow" );
  $( "#fast" ).show ( "fast" );
  $( "#ms" ).show( 1500 );
  $( "#toggle" ).on( "click" , function(){
    $( "#toggled" ).toggle();
  });
});