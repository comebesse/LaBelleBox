$(document).ready(function(){

  $("#nombre-vins").click(function() {
    $(".resultats-nombre-vins").css("z-index","5");
    $(".resultats-page-initiale").css("z-index","1");
    $(".resultats-nombre-fromages").css("z-index","1");
    $(".resultats-nombre-charcuteries").css("z-index","1");
    $(".resultats-duree-abonnement").css("z-index","1");
  });

  $("#nombre-fromages, .bouton-vin-0, .bouton-vin-1, .bouton-vin-2, .bouton-vin-3").click(function()  {
    $(".resultats-nombre-fromages").css("z-index","5");
    $(".resultats-nombre-vins").css("z-index","1");
    $(".resultats-page-initiale").css("z-index","1");
    $(".resultats-nombre-charcuteries").css("z-index","1");
    $(".resultats-duree-abonnement").css("z-index","1");
  });

  $("#nombre-charcuteries, .bouton-fromage-0, .bouton-fromage-1, .bouton-fromage-2, .bouton-fromage-3").click(function() {
    $(".resultats-nombre-charcuteries").css("z-index","5");
    $(".resultats-nombre-fromages").css("z-index","1");
    $(".resultats-nombre-vins").css("z-index","1");
    $(".resultats-page-initiale").css("z-index","1");
    $(".resultats-duree-abonnement").css("z-index","1");
  });

  $("#duree-abonnement, .bouton-charcuterie-0, .bouton-charcuterie-1, .bouton-charcuterie-2, .bouton-charcuterie-3").click(function() {
    $(".resultats-duree-abonnement").css("z-index","5");
    $(".resultats-nombre-charcuteries").css("z-index","1");
    $(".resultats-nombre-fromages").css("z-index","1");
    $(".resultats-nombre-vins").css("z-index","1");
    $(".resultats-page-initiale").css("z-index","1");
  });

  $(".bouton-vin-0, .bouton-vin-1, .bouton-vin-2, .bouton-vin-3, .bouton-fromage-0, .bouton-fromage-1, .bouton-fromage-2, .bouton-fromage-3, .bouton-charcuterie-0, .bouton-charcuterie-1, .bouton-charcuterie-2, .bouton-charcuterie-3 ").mouseover(function() {
    $(".vin1").css("display","none");
    $(".vin2").css("display","none");
    $(".vin3").css("display","none");
    $(".fromage1").css("display","none");
    $(".fromage2").css("display","none");
    $(".fromage3").css("display","none");
    $(".charcuterie1").css("display","none");
    $(".charcuterie2").css("display","none");
    $(".charcuterie3").css("display","none");
  });


  $(".bouton-vin-1").mouseover(function() {
    $(".vin1").css("display","inline-block");
  }).mouseout(function(){
    $(".vin1").css("display","none");
  });

  $(".bouton-vin-2").mouseover(function() {
    $(".vin1").css("display","inline-block");
    $(".vin2").css("display","inline-block");
  }).mouseout(function(){
    $(".vin1").css("display","none");
    $(".vin2").css("display","none");
  });

  $(".bouton-vin-3").mouseover(function() {
    $(".vin1").css("display","inline-block");
    $(".vin2").css("display","inline-block");
    $(".vin3").css("display","inline-block");
  }).mouseout(function(){
    $(".vin1").css("display","none");
    $(".vin2").css("display","none");
    $(".vin3").css("display","none");
  });

  $(".bouton-fromage-1").mouseover(function() {
    $(".fromage1").css("display","inline-block");
  }).mouseout(function(){
    $(".fromage1").css("display","none");
  });

  $(".bouton-fromage-2").mouseover(function() {
    $(".fromage1").css("display","inline-block");
    $(".fromage2").css("display","inline-block");
  }).mouseout(function(){
    $(".fromage1").css("display","none");
    $(".fromage2").css("display","none");
  });

  $(".bouton-fromage-3").mouseover(function() {
    $(".fromage1").css("display","inline-block");
    $(".fromage2").css("display","inline-block");
    $(".fromage3").css("display","inline-block");
  }).mouseout(function(){
    $(".fromage1").css("display","none");
    $(".fromage2").css("display","none");
    $(".fromage3").css("display","none");
  });




  $(".bouton-charcuterie-1").mouseover(function() {
    $(".charcuterie1").css("display","inline-block");
  }).mouseout(function(){
    $(".charcuterie1").css("display","none");
  });

  $(".bouton-charcuterie-2").mouseover(function() {
    $(".charcuterie1").css("display","inline-block");
    $(".charcuterie2").css("display","inline-block");
  }).mouseout(function(){
    $(".charcuterie1").css("display","none");
    $(".charcuterie2").css("display","none");
  });

  $(".bouton-charcuterie-3").mouseover(function() {
    $(".charcuterie1").css("display","inline-block");
    $(".charcuterie2").css("display","inline-block");
    $(".charcuterie3").css("display","inline-block");
  }).mouseout(function(){
    $(".charcuterie1").css("display","none");
    $(".charcuterie2").css("display","none");
    $(".charcuterie3").css("display","none");
  });





  $(".bouton-mois-1").mouseover(function() {
    $(".un-mois").css("display","inline-block");
  }).mouseout(function(){
    $(".un-mois").css("display","none");
  });

  $(".bouton-mois-3").mouseover(function() {
    $(".trois-mois").css("display","inline-block");
  }).mouseout(function(){
    $(".trois-mois").css("display","none");
  });

  $(".bouton-mois-6").mouseover(function() {
    $(".six-mois").css("display","inline-block");
  }).mouseout(function(){
    $(".six-mois").css("display","none");
  });

  $(".bouton-mois-12").mouseover(function() {
    $(".douze-mois").css("display","inline-block");
  }).mouseout(function(){
    $(".douze-mois").css("display","none");
  });


  var contenu = ["''1Waouh, c'est trop de la bombe cette box!''", "''2Je recommande de ouf à mes copains!''", "''3Franchement impeccable. Un grand bravo messieurs''", "''4Youpi''", "''5test maggle''", "''6bah ouais morray''"];
  var a = 0;
  $('#contenu-avis-client')[0].innerHTML = contenu[a];

  $(".icons8-Left").click(function() {
    if (a<1) {a=contenu.length-1} else {a=a-1}
    $('#contenu-avis-client')[0].innerHTML = contenu[a];

  });

  $(".icons8-Right").click(function() {
    if (a>contenu.length-2) {a=0} else {a=a+1}
    $('#contenu-avis-client')[0].innerHTML = contenu[a];
  });









});

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);
  $('#heure')[0].innerHTML =
  "Il est " + h + ":" + m + ". Apérooo !";
  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
