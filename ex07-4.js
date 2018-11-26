function add2(){
  var a = document.getElementById('1input').value;
  var b = document.getElementById('2input').value;
  alert(a/(b*b));
  
  if(a/(b*b) < 18.5)
  {alert('低体重')}
  else if(a/(b*b) < 25 )
    {alert('普通')}
  else {alert('肥満')}
  
}