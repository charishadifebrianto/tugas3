function myFunction() {
	var r = document.getElementById('r').value;
	var hasillpbola = 4*3.14*r*r;
  	var hasilvolumebola = 1.3333333*3.14*r*r*r;

  document.getElementById('hasillpbola').innerHTML = hasillpbola;
  document.getElementById('hasilvolumebola').innerHTML = hasilvolumebola;
}