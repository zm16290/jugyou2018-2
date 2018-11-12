function henkou2(){
  timer();  
  kaeru2(); 
  }


function timer(){
  setTimeout("modosu()",3000);
}
function modosu() {
  document.getElementById('man2').src = './img/coldsleep_man.png';
}

function kaeru2() {
  document.getElementById('man2').src = './img/coldsleep_wakeup_man.png';
}