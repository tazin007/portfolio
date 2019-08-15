//Resize main container
function autoResizeDiv() {
  document.getElementById('body').style.height = window.innerHeight + 'px';
}
window.onresize = autoResizeDiv();

//Page Show-hide and color change
var totalNumberOfPages = 6;
for (var i = 2; i <= totalNumberOfPages; i++) {
  document.getElementById('page' + i).style.display = 'none';
}

var colors = ["#21252B", "#21252B", "snow", "white", "#21252B", "#445577"];
document.getElementById('btn1').style.backgroundColor = colors[0];

function clickMe(id) {

  for (var j = 1; j <= totalNumberOfPages; j++) {

      document.getElementById('page' + j).style.display = 'none';
      document.getElementById('btn' + j).style.backgroundColor = "";
      document.getElementById("btn-i" + j).classList.remove("btn-active");

  }

  document.getElementById('page' + id).style.display = 'block';
  var bc = document.getElementById('page' + id).style.backgroundColor = colors[id - 1];
  document.getElementById('page-container').style.backgroundColor = bc;
  document.getElementById('btn' + id).style.backgroundColor = bc;
  document.getElementById("btn-i" + id).classList.add("btn-active");

};
//Image container change page-4
function imgChange(id) {
  for (var i = 1; i <= 2; i++) {
      document.getElementById('page4-btn' + i).classList.remove('page4-btn-active');
      document.getElementById('image-container' + i).classList.remove('image-container-active');

  }
  document.getElementById('page4-btn' + id).classList.add('page4-btn-active');
  document.getElementById('image-container' + id).classList.add('image-container-active');

}
/* profile image clock*/
function imageClock() {
  with(new Date()) {
      h = 30 * ((getHours() % 12) + getMinutes() / 60); // 30 degrees hour
      m = 6 * getMinutes(); // 6 degrees every minute
      s = 6 * getSeconds(); // 6 degrees every second
      // setting the rotate CSS attribute to those degree values -->
      document.getElementById("seconds").style.cssText =
          "-webkit-transform:rotate(" + s + "deg);";
      document.getElementById("minutes").style.cssText =
          "-webkit-transform:rotate(" + m + "deg);";
      document.getElementById("hours").style.cssText =
          "-webkit-transform:rotate(" + h + "deg);";

      setTimeout(imageClock, 1000); // calling the function every second
  }
}
window.onload = imageClock();

/*button color change*/
let c = 0;

function colorChanges() {
  let color = ["green", "yellow"];
  document.getElementById('btn6').style.color = color[c];
  c = (c + 1) % color.length;
}
setInterval(colorChanges, 1000);

/*var k = 0;
var tiktok = ["red", "green"];
function colorChange() {
setTimeout(function(){
document.getElementById('btn6').style.color = tiktok[c];
c = (k + 1) % tiktok.length;
colorChange(); //add callback to its own function at the end
}, 1000);
};*/



/*button show hide with hamburger button*/
function clickBurger() {
  document.getElementById('button').classList.add('hamburger-active');
  document.getElementById('hamburger-enter').style.display = "none";
  document.getElementById('hamburger-exit').style.display = "block";



}

function clickCross() {
  document.getElementById('button').classList.remove('hamburger-active');
  document.getElementById('hamburger-enter').style.display = "block";

}