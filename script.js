// Zadatak

var datum = new Date();
	//Deklariramo varijablu datum i pridodamo
	//joj vrijednost današnjeg datuma

var vrijeme = datum.getHours();
	//deklariramo varijablu vrijeme i pridamo
	//joj vrijednost sati - današnjeg dana
	
	
	
var vrijeme = 14;

 
 if ( vrijeme <= 10) {
	 alert( "Dobro jutro! Nadam se da ste dobro spavali." );
 }
 else if ( vrijeme >= 11 && vrijeme<= 18)  
 {
	 alert( " Dobar dan! Spremni smo za nove zadatke.");
 }
 else 
 {
	 alert( "Dobra večer! Vrijeme je za odmor.");
 }
 