function bloodtype(){
if(document.getElementById('a').value == 'yes' &&
   document.getElementById('b').value == 'no')
  {alert('あなたはA型')}
  else if(document.getElementById('a').value == 'no' &&
          document.getElementById('b').value == 'yes')
      {alert('あなたはB型')}
  else if(document.getElementById('a').value == 'no' &&
          document.getElementById('b').value == 'no')
      {alert('あなたはO型')}
  else{alert('あなたはAB型')}
}

function bloodtype(){
if(document.getElementById('a').value != 'yes' ||
   document.getElementById('a').value !='no' ||
   document.getElementById('b').value != 'yes' ||
   document.getElementById('b').value != 'no')
  {alert('yesかnoを入力してください')}
}