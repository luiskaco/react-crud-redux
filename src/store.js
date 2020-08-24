import {createStore, applyMiddleware, compose } from 'redux';
/*
createStore: crear el store
applyMiddlewate: para pasar thunk para agregarl al store
compose:
*/
import thunk from 'redux-thunk';  // funciones asincronas
import reducer from './reducers';

const store = createStore(
    reducer, 
    compose( applyMiddleware(thunk),
           
        typeof window === 'object' &&
        typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        /*
            Nota: Ayuda a que la app siga funcionando cuando redux devtool este o no instalado. 
            Para evirar el error en los navegadores que no se tienen el tools
        */
    
    
        )
    /*Nota: ApplyMiddleare se requiere por se usa thunk */
);

export default store;



/* Nota importante: store va tener todo el state. Solo un store por app  */
