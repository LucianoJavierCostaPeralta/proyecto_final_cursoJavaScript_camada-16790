/*
 * Clase Ejecutable * 
 */
// * Variables *

const ingresos = [
    new Ingreso("Sueldo", 2100.00),
    new Ingreso("venta coche", 1500.00) 
    
];

const egresos = [
    new Egreso("Alquiler departamento", 900),
    new Egreso("Ropa", 400)
];

// * / Variables *

// * Functions *
/*
 *******************************************************************************
 ! Dando Formato a la moneda , como a el porcentaje  
 *******************************************************************************
*/

// * Function formatoMoneda() *
const formatoMoneda = (valor) => valor.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
});
// * / function formatoMoneda() *

// * Function formatoPorcentaje() *
const formatoPorcentaje = (valor) => valor.toLocaleString('en-US', {
    style: 'percent',
    minimumFractionDigits: 2
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
    <div class="elemento_descripcion">${ingreso.descripcion}</div>

    <div class="derecha limpiarEstilos">
      <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
      <div class="elemento_eliminar">
        <button class="elemento_eliminar--btn">
          <ion-icon name="close-circle-outline" onclick='eliminarIngreso(${ingreso.id})' ></ion-icon>
        </button>
      </div>
    </div>
  </div>

    `;

    
    
    return ingresoHTML ;

}
// * / Function crearIngresoHTML() *



// * Function cargarIngresos() *
const cargarIngresos = () => {

    const listaIngresosId = document.getElementById('lista-ingresos');
    let ingresosHTML = '';

    for (let ingreso of ingresos) {

        ingresosHTML += crearIngresoHTML(ingreso);
    }

    listaIngresosId.innerHTML = ingresosHTML;
}
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
      <div class="elemento_descripcion">${egreso.descripcion}</div>

      <div class="derecha limpiarEstilos">
        <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>

        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>

        <div class="elemento_eliminar">
          <div class="elemento_eliminar--btn">
            <ion-icon name="close-circle-outline"
            onclick='eliminarEgreso(${egreso.id})'></ion-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
    
    
    `;

    
    
    

    return egresoHTML;

}

// * / Function crearEgresoHTML()*

// * Function cargarEgresos()*

const cargarEgresos = () => {

    const listaEgresosId = document.getElementById('lista-egresos');
    let egresosHTML = '';

    for (let egreso of egresos) {
        
        egresosHTML += crearEgresoHTML(egreso);
    }

    listaEgresosId.innerHTML = egresosHTML ; 

    

}


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

 let indiceEliminarI = ingresos.findIndex(
        ingreso => ingreso.id === id 
    );
ingresos.splice(indiceEliminarI , 1);

cargarHeader();
cargarIngresos();


} 

// * / Function eliminarIngreso()*

const eliminarEgreso =  (id) => {

    let indiceEliminarE = egresos.findIndex(
        egreso => egreso.id === id 
    );

    egresos.splice(indiceEliminarE , 1);

cargarHeader();
cargarEgresos();

}


// * Function eliminarEgreso()*



// * / Function eliminarEgresos()*



/*
 *******************************************************************************
 ! /  Function cargarEgresos() - crearEgresoHTML()
 *******************************************************************************
*/








/*
 *******************************************************************************
 ! Realizamos las funciones , para calcular los totales de ingreso e egreso
 *******************************************************************************
 */

// * Function totalIngresos() *
let totalIngresos = () => {
    let totalIngreso = 0;

    for (let ingreso of ingresos) {
        totalIngreso += ingreso.valor;
    }

    return totalIngreso;
};


// * / function  totalIngresos() *

// * function totalEgresos() * 
let totalEgresos = () => {
    let totalEgreso = 0;

    for (let egreso of egresos) {

        totalEgreso += egreso.valor;
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

    const presupuestoId = document.getElementById('presupuesto');
    const ingresosId = document.getElementById('ingresos');
    const egresosId = document.getElementById('egresos');
    const porcentajeId = document.getElementById('porcentaje');

    /*
     ! Realizamos los calculos para obtener  el presupuesto y porcentaje actual 
    */
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();

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