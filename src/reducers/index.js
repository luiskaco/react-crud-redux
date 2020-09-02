import {combineReducers} from 'redux';
import productoReducer from './productReducer';

//Importa otro reducer
import alertaReducer from './alertReducer';

/**Nota todos los reducer deben ser importtados aqui */

export default combineReducers({
    productos: productoReducer,
    alerta: alertaReducer
});

/*Nota2:  combine reducer solo va crear un reducer */