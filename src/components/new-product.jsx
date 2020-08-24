import React from 'react';
import { useDispatch, useSelector }  from 'react-redux';

/**
 *  useDispasth: sirve para ejecutar las acciones que tengamos, ademas
 *               La usamos apra llamar las funciones que se tenga en ls accion,
 *               devuelve una función que podremos emplear para enviar acciones a la store de Redux.
 *  useSelector: Se usa para acceder a las accciones del componentes
 */
// action de redux
import {crearNuevoProductoAction} from '../actions/productAction';
    // utilizamos use dispatch y la crea una funcion
    const dispatch = useDispatch();

    // Llama el accion de product accion
    const agregarProducto = producto => dispatch( crearNuevoProductoAction(producto) );


    // Cuando el usuario haga nuevo submit
    const submitNuevoProducto = e =>{
        e.preventDefault();

        // Validar formulario

        // Si no hay errores

        // Crear el nuevo producto
        agregarProducto();
    }

const NuevoProductos = () => {
    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="
                          text-center
                          mb-4
                          font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>
                        <form
                            onSubmit={submitNuevoProducto}
                        >
                            <div className="form-group">
                                <label>Nombre del Producto</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto" 
                                    name="nombre"
                                    />
                            </div>
                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input 
                                    type="number"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="precio"
                                    />    
                            </div>
                            <button 
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                                    Agregar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NuevoProductos;