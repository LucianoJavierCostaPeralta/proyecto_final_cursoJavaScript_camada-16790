// * Clase Padre * 
class Dato {

    // * Metodo Constructor *
    constructor(descripcion,valor){

       //*! Atributos 
       this._descripcion = descripcion;
       this._valor = valor;
    }

    // * Metodos Geter & Seter *

    get descripcion() {
        return this._descripcion;
    }

    set descripcion (descripcion){
        this._descripcion = descripcion;
    }

    get valor() {
        return this._valor;
    }

    set valor(valor){
        this._valor = valor;
    }

}
