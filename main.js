// Blue Button

document.getElementById("blue-btn").addEventListener("click", blueMad);

function blueMad() {
  let plural = document.getElementById("plural-input").value;
  let adj = document.getElementById("adj-input").value;
  let verb = document.getElementById("verb-input").value;
  let noun = document.getElementById("noun-input").value;

  let output = `"There are too many ${plural} on this ${adj} airplane!", I screamed. "Somebody has to ${verb} on the ${noun} to solve this problem!"`;

  document.getElementById("blue-output").innerHTML = output;
}

// Red Button

document.getElementById("red-btn").addEventListener("click", redMad);

function redMad() {
  let plural = document.getElementById("plural-input").value;
  let adj = document.getElementById("adj-input").value;
  let verb = document.getElementById("verb-input").value;
  let noun = document.getElementById("noun-input").value;

  let output = `Yesterday, a ${adj} ${noun} went ${verb} with ${plural}`;

  document.getElementById("red-output").innerHTML = output;
}
