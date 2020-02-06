/* When the input field receives input, convert the value from feet to meters */
function lengthConverter(valNum) {
  document.getElementById("outputCm").innerHTML = valNum * 30.48;
  document.getElementById("outputKm").innerHTML = valNum / 3281;
  document.getElementById("outputInch").innerHTML = valNum * 12;
  document.getElementById("outputMeters").innerHTML = valNum / 3.2808;
  document.getElementById("outputYard").innerHTML = valNum / 3;
  document.getElementById("outputMile").innerHTML = valNum / 5280;
}

function weightConverter(){
  var showAnswer;
  var WeightUnitBef = document.getElementById('WeightUnitBef').value;
  var WeightUnitAft = document.getElementById('WeightUnitAfter').value;
  var numberwt = document.getElementById('numberwt').value;
  switch (WeightUnitBef + WeightUnitAft) {
    //* Grams to others *//
    case 'ingrams' + 'outgrams':
      showAnswer = numberwt;
      break;
    case 'ingrams' + 'outpounds' :
      showAnswer = numberwt / 454;
      break;
      case 'ingrams' + 'outkg':
      showAnswer = numberwt / 1000;
      break;
      case 'ingrams' + 'outounces':
      showAnswer = numberwt / 28.35;
      break;
      //*Kg to others*//
    case 'inkg' + 'outkg':
      showAnswer = numberwt;
      break;
    case 'inkg' + 'outpounds' :
      showAnswer = numberwt * 2.205;
      break;
      case 'inkg' + 'outgrams':
      showAnswer = numberwt * 1000;
      break;
      case 'inkg' + 'outounces':
      showAnswer = numberwt * 38.274;
      break;
      //*Pounds to others*//
    case 'inpounds' + 'outpounds':
      showAnswer = numberwt;
      break;
    case 'inpounds' + 'outgrams' :
      showAnswer = numberwt * 454;
      break;
      case 'inpounds' + 'outkg':
      showAnswer = numberwt / 2.205;
      break;
      case 'inpounds' + 'outounces':
      showAnswer = numberwt * 16;
      break;
      //*ounces to others*//
    case 'inounces' + 'outounces':
      showAnswer = numberwt;
      break;
    case 'inounces' + 'outpounds' :
      showAnswer = numberwt / 16;
      break;
      case 'inounces' + 'outkg':
      showAnswer = numberwt / 35.274;
      break;
      case 'inounces' + 'outgrams':
      showAnswer = numberwt * 28.35;
      break;
    default:
  }
  document.getElementById('Answer').innerHTML = showAnswer;
}

function massFluxConverter(){
  var massFlux = document.getElementById('massflux').value;
  var area = document.getElementById('Area').value;
  var density = document.getElementById('density').value;
  var denAnswer = (massFlux/(density*(1e+9/1000)))*1000*1000;
  var denAnswer = denAnswer.toFixed(4);
  document.getElementById('denAnswer').innerHTML = denAnswer;
}
