function manning(){
  var n = document.getElementById("n").value;
  var rh = document.getElementById("rh").value;
  var s = document.getElementById("s").value;
  var answer;
  var si = document.getElementById("si");
  var english = document.getElementById("english");

  if (si.checked == true){
  answer = 'Computed flow velocity, v, is ' + (1 / n) * (rh ** (2/3)) * (s ** (1/2)) + ' m/s';
  } else if (english.checked == true){
  answer = 'Computed flow velocity, v, is ' + (1.486 / n) * (rh ** (2/3)) * (s ** (1/2)) + ' ft/s';
  } else {
  answer = "no chosen units!"
  }

  if (n < 0.01 || n > 0.06 || s < 0 || rh < 0){
  alert ("Check Input Values")
}
  else{}

   document.getElementById("answer").innerHTML = answer;
}
