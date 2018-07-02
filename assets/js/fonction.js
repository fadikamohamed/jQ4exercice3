$(function() {
  //Déclaration de régex et intégration dans des variables
  var regexName = /^[a-zA-Z'àâäçéèêëîïôöùûüÀÂÄÇÉÈÊËÎÏÔÖÙÛÜ \-]+$/;
  var regexEMail = /^[a-zA-Z][\w]+[.]?[\w]+[@][\w]+[.](fr|com|org|net)$/;
  var regexFone = /^(01|02|03|04|05|06|07|09)[\d]{8}|(01|02|03|04|05|06|07|09)[.][\d]{2}[.][\d]{2}[.][\d]{2}[.][\d]{2}|(01|02|03|04|05|06|07|09)[,][\d]{2}[,][\d]{2}[,][\d]{2}[,][\d]{2}$/;
  //Déclenchement de l'évenement au clic sur le bouton valider
  $('#submit').click(function() {
    //Intégration des valeurs des champs dans des variables
    var firstname = $('#firstname').val();
    var lastname = $('#lastname').val();
    var eMail = $('#eMail').val();
    var foneNumber = $('#foneNumber').val();
    //Teste de la valeur avec le regex. Si true ...
    if (regexName.test(firstname)) {
      //Afficher une bordure verte
      $('#firstname').css('border', '2px green solid');
      $('#showfirstname').text(firstname);
      //Sinon...
    } else {
      //Afficher une bordure rouge
      $('#firstname').css('border', '2px red solid');
    }

    //Teste de la valeur avec le regex. Si true ...
    if (regexName.test(lastname)) {
      //Afficher une bordure verte
      $('#lastname').css('border', '2px green solid');
      $('#showLastname').text(lastname);
      //Sinon...
    } else {
      //Afficher une bordure rouge
      $('#lastname').css('border', '2px red solid');
    }

    //Teste de la valeur avec le regex. Si true ...
    if (regexEMail.test(eMail)) {
      //Afficher une bordure verte
      $('#eMail').css('border', '2px green solid');
      $('#showEMail').text(eMail);
      //Sinon...
    } else {
      //Afficher une bordure rouge
      $('#eMail').css('border', '2px red solid');
    }

    //Teste de la valeur avec le regex. Si true ...
    if (regexFone.test(foneNumber)) {
      //Afficher une bordure verte
      $('#foneNumber').css('border', '2px green solid');
      $('#showFoneNumber').text(foneNumber);
      //Sinon...
    } else {
      //Afficher une bordure rouge
      $('#foneNumber').css('border', '2px red solid');
    }

  });
});
