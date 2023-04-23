const toggle = document.getElementById("container");
const calculadora = document.querySelector("body");
const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".botones");

/*boton switch*/
toggle.onclick = function() {

  calculadora.classList.toggle('dark-mode');
  toggle.classList.toggle("bola");
}
/*fin del boton switch*/

for (let boton of botones) {
  boton.addEventListener("click", function() {   
    const pressButton = boton.textContent;

    if (pressButton === "C") {
      pantalla.textContent = "0";
      return;
    } else if (pressButton === "=") {
      pantalla.textContent = eval(pantalla.textContent);
      return;
    };

    if (pressButton === "+/-") {
      pantalla.textContent = parseFloat(pantalla.textContent) * -1;
      return;
    };

    if (pantalla.textContent === "0") {
      pantalla.textContent = pressButton;
    } else {
      pantalla.textContent += pressButton;
      return;
    };

    if (pressButton === "%") {
      pantalla.textContent = eval(pressButton.textContent);
    }

  });
}





