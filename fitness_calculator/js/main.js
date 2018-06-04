document.addEventListener("DOMContentLoaded", function(event) {

  var initWeight = document.getElementById("init-weight");
  var currentWeight = document.getElementById("current-weight");

  var weightLoss = function(){
    var weightDiff = document.getElementById("weight-diff");
    weightDiff.textContent = parseFloat(initWeight.value) - parseFloat(currentWeight.value);
    // have next section in a div where display is flipped on on submit
  };

  document.getElementById("submitWeight").addEventListener("click", weightLoss);

  var wristCirc = document.getElementById("wrist-circ");
  var forearmCirc = document.getElementById("forearm-circ");
  var waistCirc = document.getElementById("waist-circ");
  var hipCirc = document.getElementById("hip-circ");

  var indexValue = document.getElementById("bf-diff");



  var adjMeasurements = function() {
    var weightAdj = (parseFloat(currentWeight.value) * 0.732) +8.987;
    var wristAdj = parseFloat(wristCirc.value) / 3.14;
    var forearmAdj = parseFloat(forearmCirc.value) * 0.434;
    var waisttAdj = parseFloat(waistCirc.value) * 0.157;
    var hipAdj = parseFloat(hipCirc.value) * 0.249;
    var leanMass = (((weightAdj + wristAdj) - waisttAdj) - hipAdj) + forearmAdj
    var fatMass = parseFloat(currentWeight.value) - leanMass;
    var fatPercentage = ((fatMass / parseFloat(currentWeight.value)) * 100).toFixed(2);
    var indexValue = document.getElementById("bf-diff");
    indexValue.textContent = fatPercentage + "%  ";


  }
  document.getElementById("submit-circs").addEventListener("click", adjMeasurements);

  var date = new Date();

});
