//****************************************************************
//*****                      ENATRONIC                       *****
//*****           Générateur de discours façon ENA           *****
//***** Auteur : Christian FERON (http://chrisferon.free.fr) *****
//****************************************************************

//********************************
//*****   Faire une phrase   *****
//********************************
function FaireUnePhrase() { 	   
//Appelé par le bouton FaireUnePhrase
 i=0;
 i = RandomGen(i,8);//Nombre des segments 1
 document.getElementById('Segment01').selectedIndex = i;
 
 i = RandomGen(i,8);//Nombre des segments 2
 document.getElementById('Segment02').selectedIndex = i;
		 
 i = RandomGen(i,8);//Nombre des segments 3
 document.getElementById('Segment03').selectedIndex = i;
		 
 i = RandomGen(i,8);//Nombre des segments 4
 document.getElementById('Segment04').selectedIndex = i; 
 
 //i = RandomGen(i,8);//Nombre des segments 5
 //document.getElementById('Segment05').selectedIndex = i;
		 
 AssemblagePhrase();
 return false;
}//End function... 
 
 function FaireUnDiscours(nombre_phrases) {
//Appelé par le bouton FaireUnDiscours
 chaine = '  ' ; memoi01 = 0; memoi02 = 0; memoi03 = 0; memoi04 = 0;
 for (j=0;j<nombre_phrases;j++) { //Boucle discours = nombre_phrases
		 	if (j==0) { i = 0; } //Mesdames, messieurs en premier paragraphe
			else { do { i = RandomGen(i,8); } while ( (i == 0) || (i == memoi01) );//Sinon choix aléatoire		
				   memoi01 = i; } 
			document.getElementById('Segment01').selectedIndex = i;
			chaine1 = document.getElementById('Segment01').options[i].value;
			//Segment 02
			do { i = RandomGen(i,8); } while ( (i == 0) || (i == memoi01) ); 
			memoi02 = i;
			document.getElementById('Segment02').selectedIndex = i;
			chaine2 = document.getElementById('Segment02').options[i].value;		 	
			//Segment 03
			do { i = RandomGen(i,8); } while ( (i == 0) || (i == memoi01) ); 
			memoi03 = i;
			document.getElementById('Segment03').selectedIndex = i;
			chaine3 = document.getElementById('Segment03').options[i].value;
			//Segment 04
		 	do { i = RandomGen(i,8); } while ( (i == 0) || (i == memoi01) ); 
			memoi04 = i;	
			document.getElementById('Segment04').selectedIndex = i;
			chaine4 = document.getElementById('Segment04').options[i].value;
			
			chaine = chaine + chaine1 + ' ' + chaine2 + ' ' + chaine3 + ' ' + chaine4 + "\r\n\r\n  ";
 }
	document.getElementById('texte').value = chaine;
 }//End function... 

//***************************************
//***** Rafraichissement des Inputs *****
//***************************************
function AssemblagePhrase() { //Les InputBox sont rafraichies ici
 chaine ='' ;			  
 i = document.getElementById('Segment01').selectedIndex;  
 chaine1 = document.getElementById('Segment01').options[i].value;
 			  
 i = document.getElementById('Segment02').selectedIndex;
 chaine2 = document.getElementById('Segment02').options[i].value;

 i = document.getElementById('Segment03').selectedIndex;
 chaine3 = document.getElementById('Segment03').options[i].value;
	
 i = document.getElementById('Segment04').selectedIndex;
 chaine4 = document.getElementById('Segment04').options[i].value;
	
 chaine = chaine1 + ' ' + chaine2 + ' ' + chaine3 + ' ' + chaine4; 
 document.getElementById('texte').value = chaine;
}//End function...

//***************************************
//*****    Fonctions aléatoires     *****
//***************************************
function RandomGen(val,lmt) { //Génère un nombre aléatoire + vérifie qu'il soit dans la fourchette prévue
 val = Math.random(); val = Math.floor(lmt*val);
 while ( (val>lmt-1) ) { val = Math.random(); val = Math.floor(lmt*val); } //Vérification fourchette
return val;
}//End function...

//***************************************
//*****     Gestion de chaines      *****
//***************************************
function FirstUpperCase(mot) {
 var m = mot.charAt(0).toUpperCase() + mot.substring(1);
 return m;
}//End function..

function FirstLowerCase(mot) {
 var m = mot.charAt(0).toLowerCase() + mot.substring(1);
 return m;
}//End function...
 
