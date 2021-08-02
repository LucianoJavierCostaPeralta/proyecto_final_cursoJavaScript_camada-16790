// * Clase Padre * 
class Dato {

    // * Metodo Constructor *
    constructor(descripcion,valor , id){

       //*! Atributos 
       this._descripcion = descripcion;
       this._valor = Number(valor);
       this._id = id;
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

    get id (){
        return this._id;
    }

    set id (id) {
        this._id = id ; 
    }

}
