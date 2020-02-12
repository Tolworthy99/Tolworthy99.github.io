function manning(){
  var n = document.getElementById("n").value;
  var rh = document.getElementById("rh").value;
  var s = document.getElementById("s").value;
  var answer;
  var si = document.getElementById("si");
  var english = document.getElementById("english");
  var warning;

  if (si.checked == true){
  answer = (1 / n) * (rh ** (2/3)) * (s ** (1/2));
  } else if (english.checked == true){
  answer = (1.486 / n) * (rh ** (2/3)) * (s ** (1/2));
  } else{
  answer = "no chosen units!"
  }

  if (answer < 0){
    warning = "ANSWER IS NEGATIVE";
  } else{
    wanrning = ""
  }


  document.getElementById("answer").innerHTML = answer;
  document.getElementById("warning").innerHTML = warning;
}
