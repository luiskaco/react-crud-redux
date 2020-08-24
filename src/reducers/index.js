import {combineReducers} from 'redux';
import productoReducer from './productReducer';

/**Nota todos los reducer deben ser importtados aqui */

export default combineReducers({
    productos: productoReducer
})

/*Nota2:  combine reducer solo va crear un reducer */