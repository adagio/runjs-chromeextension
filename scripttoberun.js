
  var greeting = "hola, ";
  var button = $("img");
  button.addEventListener("click", function() {
    alert(greeting + button.person_name + ".");
  }, false);
  console.log('Script was Executed');
