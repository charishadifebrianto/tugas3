function myFunction() {
  var r = document.getElementById('r').value;
  var t = document.getElementById('t').value;
  var hasillpsilinder = (2*3.14*r*r)+(2*3.14*r*t);
  var hasilvolumesilinder = 3.14*r*r*t;

  document.getElementById('hasillpsilinder').innerHTML = hasillpsilinder;
  document.getElementById('hasilvolumesilinder').innerHTML = hasilvolumesilinder;

}