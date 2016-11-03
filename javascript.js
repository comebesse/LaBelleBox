$(document).ready(function(){

   $("#nombre-vins").click(function() {
     $(".resultats-nombre-vins").css("z-index","5");
     $(".resultats-page-initiale").css("z-index","1");
     $(".resultats-nombre-fromages").css("z-index","1");
     $(".resultats-nombre-charcuteries").css("z-index","1");
     $(".resultats-duree-abonnement").css("z-index","1");
});

   $("#nombre-fromages").click(function() {
     $(".resultats-nombre-fromages").css("z-index","5");
     $(".resultats-nombre-vins").css("z-index","1");
     $(".resultats-page-initiale").css("z-index","1");
     $(".resultats-nombre-charcuteries").css("z-index","1");
     $(".resultats-duree-abonnement").css("z-index","1");
});

  $("#nombre-charcuteries").click(function() {
    $(".resultats-nombre-charcuteries").css("z-index","5");
    $(".resultats-nombre-fromages").css("z-index","1");
    $(".resultats-nombre-vins").css("z-index","1");
    $(".resultats-page-initiale").css("z-index","1");
    $(".resultats-duree-abonnement").css("z-index","1");
});

  $("#duree-abonnement").click(function() {
    $(".resultats-duree-abonnement").css("z-index","5");
    $(".resultats-nombre-charcuteries").css("z-index","1");
    $(".resultats-nombre-fromages").css("z-index","1");
    $(".resultats-nombre-vins").css("z-index","1");
    $(".resultats-page-initiale").css("z-index","1");
});

});
