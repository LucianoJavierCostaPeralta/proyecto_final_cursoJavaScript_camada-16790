// *Clase Ejecutable *

// * Variables *
let ingresos = [],
    egresos = [];
// * / Variables

// * Selectores *
let agregarDatoId = document.getElementById("agregarDatoId");
// * / Selectores *

// * Functions *
/*
 *******************************************************************************
 ! Dando Formato a la moneda , como a el porcentaje  
 *******************************************************************************
*/

// * Function formatoMoneda() *
const formatoMoneda = (valor) =>
    valor.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
    });
// * / function formatoMoneda() *

// * Function formatoPorcentaje() *
const formatoPorcentaje = (valor) =>
    valor.toLocaleString("en-US", {
        style: "percent",
        minimumFractionDigits: 2,
    });
// * / Function formatoPorcentaje() *

/*
 *******************************************************************************
 ! /  Dando Formato a la moneda , como a el porcentaje  
 *******************************************************************************
*/

/*
 *******************************************************************************
 !   Function cargarIngresos() - crearIngresoHTML()
 *******************************************************************************
*/

// * Function crearIngresoHTML() *
const crearIngresoHTML = (ingreso) => {
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso._descripcion}</div>

    <div class="derecha limpiarEstilos">
      <div class="elemento_valor">+ ${formatoMoneda(ingreso._valor)}</div>
      <div class="elemento_eliminar">
        <button class="elemento_eliminar--btn">
          <ion-icon name="close-circle-outline" onclick='eliminarIngreso(${
            ingreso._id
          })' ></ion-icon>
        </button>
      </div>
    </div>
  </div>

    `;

    return ingresoHTML;
};
// * / Function crearIngresoHTML() *

// * Function cargarIngresos() *
const cargarIngresos = () => {
    let imprimirIngresos = [];
    if (localStorage.getItem("ingreso") != null) {
        imprimirIngresos = JSON.parse(localStorage.getItem("ingreso"));
    }

    const listaIngresosId = document.getElementById("lista-ingresos");
    let ingresosHTML = "";

    imprimirIngresos.forEach((element) => {
        ingresosHTML += crearIngresoHTML(element);
    });

    listaIngresosId.innerHTML = ingresosHTML;
};
// * / Function cargarIngresos() *

/*
 *******************************************************************************
 ! /  Function cargarIngresos() - crearIngresoHTML()
 *******************************************************************************
*/

/*
 *******************************************************************************
 !   Function cargarEgresos() - crearEgresoHTML()
 *******************************************************************************
*/

// * Function crearEgresoHTML() *
const crearEgresoHTML = (egreso) => {
    let egresoHTML = `

    <div class="elemneto limpiarEstilos ">
    <div class="elemento limpiarEstilos">
      <div class="elemento_descripcion">${egreso._descripcion}</div>

      <div class="derecha limpiarEstilos">
        <div class="elemento_valor">- ${formatoMoneda(egreso._valor)}</div>

        <div class="elemento_porcentaje">${formatoPorcentaje(
          egreso._valor / totalEgresos()
        )}</div>

        <div class="elemento_eliminar">
          <div class="elemento_eliminar--btn">
            <ion-icon name="close-circle-outline"
            onclick='eliminarEgreso(${egreso._id})'></ion-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
    
   
    `;

    return egresoHTML;
};

// * / Function crearEgresoHTML()*

// * Function cargarEgresos()*

const cargarEgresos = () => {
    let imprimirEgresos = [];
    if (localStorage.getItem("egreso") != null) {
        imprimirEgresos = JSON.parse(localStorage.getItem("egreso"));
    }

    const listaEgresosId = document.getElementById("lista-egresos");
    let egresosHTML = "";

    imprimirEgresos.forEach((element) => {
        egresosHTML += crearEgresoHTML(element);
    });

    listaEgresosId.innerHTML = egresosHTML;
};

// * / Function cargarEgresos()*

/*
 *******************************************************************************
 ! /  Function cargarEgresos() - crearEgresoHTML()
 *******************************************************************************
*/

/*
 *******************************************************************************
 !   Function eliminarIngreso() - eliminarEgreso()
 *******************************************************************************
*/

// * Function eliminarIngreso()*

const eliminarIngreso = (id) => {
    let borrar = JSON.parse(localStorage.getItem("ingreso"));
    let actualizo = borrar.filter((e) => e._id != id);
    localStorage.setItem("ingreso", JSON.stringify(actualizo));

    cargarHeader();
    cargarIngresos();
};

// * / Function eliminarIngreso()*

const eliminarEgreso = (id) => {
    let borrar = JSON.parse(localStorage.getItem("egreso"));
    let actualizo = borrar.filter((e) => e._id != id);
    localStorage.setItem("egreso", JSON.stringify(actualizo));

    cargarHeader();
    cargarEgresos();
};

// * Function eliminarEgreso()*

// * / Function eliminarEgresos()*

/*
 *******************************************************************************
 ! /  Function cargarEgresos() - crearEgresoHTML()
 *******************************************************************************
*/

/*
 *******************************************************************************
 !   Function agregarDato()
 *******************************************************************************
*/

// * Function agregarDato() *

let agregarDato = () => {
    let formularioId = document.forms["forma"];
    let tipoId = formularioId["tipo"];
    let descripcionId = formularioId["descripcion"];
    let valorId = formularioId["valor"];
    let paso1 = JSON.parse(localStorage.getItem("ingreso"));
    let paso2 = JSON.parse(localStorage.getItem("egreso"));

    if (descripcionId.value != "" && valor.value != "") {
        if (tipoId.value === "ingreso") {
            if (localStorage.getItem("ingreso") != null) {
                let index = paso1.length + 1;

                let ingreso = new Ingreso(descripcionId.value, valorId.value, index);

                paso1.push(ingreso);

                localStorage.setItem("ingreso", JSON.stringify(paso1));
            } else {
                let index = 1;

                let ingreso = new Ingreso(descripcionId.value, valorId.value, index);
                ingresos.push(ingreso);
                localStorage.setItem("ingreso", JSON.stringify(ingresos));
            }
        } else {
            if (localStorage.getItem("egreso") != null) {
                let index = paso2.length + 1;
                let egreso = new Egreso(descripcionId.value, valorId.value, index);
                paso2.push(egreso);
                localStorage.setItem("egreso", JSON.stringify(paso2));
            } else {
                // localStorage.clear()
                let index = 1;
                let egreso = new Egreso(descripcionId.value, valorId.value, index);
                egresos.push(egreso);
                localStorage.setItem("egreso", JSON.stringify(egresos));
            }
        }
    }

    //logica condicional

    // * Egreso localStorage *

    cargarHeader();
    cargarIngresos();
    cargarEgresos();
};

// * / Function agregarDato *

/*
 *******************************************************************************
 ! /  Function agregarDato()
 *******************************************************************************
*/

/*
 *******************************************************************************
 ! Realizamos las funciones , para calcular los totales de ingreso e egreso
 *******************************************************************************
 */

// * Function totalIngresos() *
let totalIngresos = () => {
    if (localStorage.getItem("ingreso") != null) {
        ingresos = JSON.parse(localStorage.getItem("ingreso"));
    }
    let totalIngreso = 0;

    for (let ingreso of ingresos) {
        totalIngreso += ingreso._valor;
    }

    return totalIngreso;
};

// * / function  totalIngresos() *

// * function totalEgresos() *
let totalEgresos = () => {
    if (localStorage.getItem("egreso") != null) {
        egresos = JSON.parse(localStorage.getItem("egreso"));
    }

    let totalEgreso = 0;

    for (let egreso of egresos) {
        totalEgreso += egreso._valor;
    }

    return totalEgreso;
};

// * / function totalEgresos() *

/*
 *******************************************************************************
 ! / Realizamos las funciones , para calcular los totales de ingreso e egreso
 *******************************************************************************
 */

/*
--------------------------------------------------------------------------------
*/

// * function cargarHeader() *

let cargarHeader = () => {
    // ! Recuperamos los elementos , por su id

    const presupuestoId = document.getElementById("presupuesto");
    const ingresosId = document.getElementById("ingresos");
    const egresosId = document.getElementById("egresos");
    const porcentajeId = document.getElementById("porcentaje");
    let porcentajeEgreso = 0;
    let presupuesto = totalIngresos() - totalEgresos();
    /*
       ! Realizamos los calculos para obtener  el presupuesto y porcentaje actual 
    */
    if (totalIngresos() != 0 && totalEgresos() != 0) {
        porcentajeEgreso = totalEgresos() / totalIngresos();
    }

    /*
     * Con la propiedad innerHTML , imprimimos los datos en html *
     */
    presupuestoId.innerHTML = formatoMoneda(presupuesto);
    ingresosId.innerHTML = formatoMoneda(totalIngresos());
    egresosId.innerHTML = formatoMoneda(totalEgresos());
    porcentajeId.innerHTML = formatoPorcentaje(porcentajeEgreso);
};

// * / function cargarHeader() *

/*
--------------------------------------------------------------------------------
*/

// *Function cargarAPP() *
let cargarApp = () => {
    // ! Llamamos a la function cargarHeader()
    cargarHeader();

    // ! Llamamos la function cargarIngresos()
    cargarIngresos();

    // ! Llamamos la function cargarEgresos()
    cargarEgresos();
};
// * / cargarApp() *

// * / Functions *

// *Eventos *
window.onload = cargarApp();
agregarDatoId.addEventListener("click", agregarDato);
// */ Eventos*