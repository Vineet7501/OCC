$(document).ready(function () {
    $("#bt").click(function () {
      var toTitle = $("input[name=title]").val();
      var toDes = $("input[name=des]").val();
      $("ol").append(`<li>${toTitle} : ${toDes} </li>`);
    });
  });