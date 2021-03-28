function myFunction() {
  var r = document.getElementById('r').value;
  var t = document.getElementById('t').value;
  var s = document.getElementById('s').value;
  var hasilvolumekerucut = 0.33333333*3.14*r*r*t;
  var hasillpkerucut = (3.14*r*r)+(3.14*r*s);

  document.getElementById('hasillpkerucut').innerHTML = hasillpkerucut;
  document.getElementById('hasilvolumekerucut').innerHTML = hasilvolumekerucut;
  

}