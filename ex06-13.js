function hekou2(){
  kaeru2();
  timer();
}
//画像の変更とタイマーのJSをここに指定する

function timer(){
setInterval("modosu()",3000)
}
//タイマーを指定

function modosu(){
document.getElementById('man2').src = './img/coldsleep_man.png';
}
//タイマー後の画像を指定

function kaeru2(){
  document.getElementById('man2').src = './img/coldsleep_wakeup_man.png' ;
}
//画像の変更の指定