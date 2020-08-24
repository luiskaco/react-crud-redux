//Importante type
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

//  Nota1:  Cada reducer tiene su propio state
const initialState = {
    productos:[],
    error:null,
    loading: false
}
/*
    Nota 2: el resudier siempre es una funcion
    Nota 3: si se le pasae state, 
         funcionara, si no se le pasa
        toma el valor del initialState
*/
export default function(state = initialState, action){
    switch(action.type){
        default:
            return state;
    }
}