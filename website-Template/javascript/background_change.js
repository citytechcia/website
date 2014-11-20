var date = new Date(); 
var time = date.getHours(); 

if ( time < 12 ) {
  document.body.style.backgroundColor="red"; 
}
else if ( time >= 12 && time < 18)
{ 
  document.body.style.backgroundColor="green";
}
else
 { 
  document.body.style.backgroundColor="yellow";
}
