# Aplicación Presupuesto Disponible

...

## Archivo HTML

< En este archivo , se creó la estructura básica , utilizando la plantilla proporcionada por [Bootstrap](https://getbootstrap.com/docs/4.6/getting-started/introduction/).

>

- Maquetación del **Header** , **Main** y **Footer** .
- Linkando Estilos CSS , archivos JS . CDN [Bootstrap](https://getbootstrap.com/docs/4.6/getting-started/introduction/) , [Jquery](https://jquery.com/).

## Archivos de estilos CSS / SASS

< Utilización del **Preprocesador** [SASS](https://sass-lang.com/) , para dar eficiencia y mantenimiento en un futuro a la appWeb .
Se dividió , en distintos **archivos.scss** , para una performance , más cómoda y efectiva

>

### Carpeta base

- reset.css : Se resetea los estilos por defectos proporcionados por HTML
- import.scss : En este archivo , se da un orden y se llaman a los distintos archivos.scss . Para su utilización .

...

### Carpeta componentes

- Header.scss : En este archivo se le da los estilos a nuestro cabecero (Header) .
- main ingreso.scss : En este archivo se da los estilos a nuestra área de ingresos .
- main egreso.scss : En este archivo se le da los estilos a nuestra área de egresos .
- elemento.scss : En este archivo se le da los estilos a los elementos creados , por parte de la información ingresada por el usuario .
- formulario.scss : En este archivo se le da los estilos a el formulario , que el usuario utiliza , para ingresar o egresar valores .

...

## Archivos javaScript

< 
En este apartado  , se trabaja la lógica de la aplicación a través del lenguaje . De débil tipado javaScript . 
Para la aplicación use la programación orientada a objetos y la utilización de los pilares , de este paradigma de programación , como la Herencia , Polimorfismo  , etc . 
>

1. Paso 1 : Se planteó la lógica de la aplicación . 
2. Paso 2 : Se trasladó la lógica , a funciones en JS .
3. Paso 3 : La interacción de JS , con HTML . A través de las apiWeb  DOM & localStorage  -   sessionStorage .  
4. Paso 4 : Se logró una simulación de base de datos , a través del JSON  . 

...

## Archivo JQUERY

<
Se utilizo la libreria de javaScript [Jquery](https://jquery.com/) , para realizar la animación **Dark Mode** . 

- Se recupera el id , del botón , que realizará la tarea .
- Se crean las funciones dark Mode() , lightMode() .
- Se realiza el evento con Jquery . 
- Se establece la lógica de la animación , como el mantenimiento con localStorage . Para que al recargar la aplicación , se conserven los cambios realizados por el usuario . 



>
