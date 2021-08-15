// *Funcion darkMode()*
const darkMode = () => {
  $("body").css("background-color", "#000");
  $("main").css("background-color", "#000");
  $("h2.tituloP").css("color", "#fff");
  $("h5").css("color", "#fff");
  $("#dolar").css("color", "#fff");
  $(".formulario_bg ").css("background-color", "#333");
  $(".formulario_bg ").css("border", "1px solid #fff");
  $(".formulario_bg ").css("border-radius", "1px");
  $("footer").css("background-color", "black");
  $("footer").css("border", "1px solid  #f7f7f7");
  $("footer").css("border-radius", "1px");
  $("#tema").html(`
    <ion-icon name="sunny-outline"></ion-icon>
    `);

  localStorage.setItem("modo", "dark");
};
// */ Function darkMode()*

/*
 *******************************************************************************
 */

// *Funcion ligthMode *
const ligthMode = () => {
  $("body").css("background-color", "#fff");
  $("main").css("background-color", "#fff");
  $("h2.tituloP").css("color", "#000");
  $("h5").css("color", "#000");
  $("#dolar").css("color", "#000");
  $(".formulario_bg ").css("background-color", "#f7f7f7");
  $(".formulario_bg ").css("border", "1px solid transparent");
  $(".formulario_bg ").css("border-radius", "1px");
  $("footer").css("background-color", "#f7f7f7");
  $("footer").css("border-radius", "1px");
  $("#tema").html(`
    <ion-icon name="moon-outline"></ion-icon>
    `);

  localStorage.setItem("modo", "ligth");
};

// */Funcion ligthMode *

/*
 *******************************************************************************
 */
// * Function themeMode()*
const themeMode = () => {
  if (localStorage.getItem("modo") == "dark") {
    ligthMode();
  } else {
    darkMode();
  }
};

// * / Function themeMode()*

/*
 *******************************************************************************
 */

// Selector con Jquery & evento con Jquery
$("#tema").click(themeMode);
// /  Selector con Jquery & evento con Jquery

/*
 *******************************************************************************
 */

// Logica
if (localStorage.getItem("modo") == "dark") {
  darkMode();
} else {
  ligthMode();
}
