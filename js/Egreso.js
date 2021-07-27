// * Clase hija , de la clase padre "Dato" *
class Egreso extends Dato {

    // !Atributo static
    static contadorEgresos = 0 ;

    // * Metodo Constructor *
    constructor (descripcion , valor ){

        // ! Atributos
        super(descripcion , valor);
        this._id = ++Egreso.contadorEgresos;
    } 

    // * Metodo geter del atributo id *
    get id(){
        return this._id ; 
    }
}