$(document).ready(function () {
  $("#toggleshop1").click(function () {
    $("#shopsection").hide();
    $("#upgradesection").show();
    $("#prestigesection").hide();
  });

  $("#toggleshop2").click(function () {
    $("#shopsection").hide();
    $("#upgradesection").hide();
    $("#prestigesection").show();
  });

  $("#toggleshop3").click(function () {
    $("#shopsection").show();
    $("#upgradesection").hide();
    $("#prestigesection").hide();
  });

  $(document).keydown(function (e) {
    if (e.which == 32) {
      $("#button").css("background-color", "#3e8341");
      $("#button").css("color", "white");
      $("#button").css("border-radius", "50%");
      $("#button").css("border-style", "solid");
      $("#button").css("border-color", "blue");
      setTimeout(function () {
        $("#button").css("background-color", "#ddd");
        $('#button').css("border-radius", "0%")
        $("#button").css("border", "none");
        $("#button").css("color", "black");
      }, 100);
    }
  });

  $("#button").hover(function () {
    $("#button").css("background-color", "#3e8341");
    $("#button").css("color", "white");
    $("#button").css("border-radius", "50%");
    $("#button").css("border-style", "solid");
    $("#button").css("border-color", "blue");
  },
  function () {
    $("#button").css("background-color", "#ddd");
    $('#button').css("border-radius", "0%")
    $("#button").css("border", "none");
    $("#button").css("color", "black");
  });

  $(document).keydown(function (e) {
    if (e.which == 32) {
      return false;
    }
  });

  $("h4").hide();
});