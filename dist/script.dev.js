"use strict";

$(document).ready(function () {
  $("#selectpagamento").change(function () {
    var testo = 1;
    var testo = $(this).children("option:selected").val();
    console.log(testo);
  });
});