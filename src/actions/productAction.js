//Importante type
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

//Nota: Accion son las funciones que modifican el State


// Crear nuevos productos
export function crearNuevoProductoAction() {
    return () =>{
        console.log('Desde action');
    }
}