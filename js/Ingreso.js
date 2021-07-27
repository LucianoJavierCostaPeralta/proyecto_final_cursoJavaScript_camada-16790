// * Clase hija , de la clase padre "Dato" *
class Ingreso extends Dato {

    // !Atributo static
    static contadorIngresos = 0 ;

    // * Metodo Constructor *
    constructor (descripcion , valor ){

        // ! Atributos
        super(descripcion , valor);
        this._id = ++Ingreso.contadorIngresos;
    } 

    // * Metodo geter del atributo id *
    get id(){
        return this._id ; 
    }
}