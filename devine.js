// Devine le nombre 

var nb = Math.round(Math.random() * 100); 
var coups = 0;    
var saisie;
var msg = 'Le nombre est compris entre 1 et 100. Vous devez le trouver en 10 coups ou moins. Bonne chance !';


do
{
     saisie = prompt(msg);
     coups++;
     
     if(saisie > nb)
          msg = "C'est moins";
     else
          msg = "C'est plus";
}
while(saisie != nb);

if (coups <= 10) {
alert("Excellent ! Vous avez gagnés en " + coups + " coups !"); }

else { 
alert ("Perdu ! Vous avez trouvés le nombre en " + coups + " coups !"); }