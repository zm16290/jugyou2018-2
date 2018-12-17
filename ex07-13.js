function dotira(){
if(document.getElementById('toshi').value % 4 !== 0)
  {alert('平年')}
  else if(document.getElementById('toshi').value % 100 == 0 &&
         document.getElementById('toshi').value % 400 !== 0)
    {alert('平年')}
else {alert('うるう年')}
}
