var output = function(input) {
  for (var i = 1; i <= input; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      $("#list").append('<li>' + "pingpong" + '</li>')
      //outputArray.push("pingpong");
    } else if (i % 3 === 0) {
      $("#list").append('<li>' + "ping" + '</li>')
      //outputArray.push("ping");
    } else if (i % 5 === 0) {
      $("#list").append('<li>' + "pong" + '</li>')
      //outputArray.push("pong");
    } else {
      $("#list").append('<li>' + i + '</li>')

      //outputArray.push(i);
    }
  };
};


$(document).ready(function() {
  $(".form").submit(function(event) {
    event.preventDefault();
    $("#list").text("");
    var input = parseInt($("#userInput").val());

    var result = output(input);

    //$(".list2").text(outputArray);
  })
});
