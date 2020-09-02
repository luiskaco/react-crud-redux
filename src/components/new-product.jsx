import React, {useState} from 'react';
import { useDispatch, useSelector }  from 'react-redux';

/**
 *  useDispasth: sirve para ejecutar las acciones que tengamos, ademas
 *               La usamos apra llamar las funciones que se tenga en ls accion,
 *               devuelve una función que podremos emplear para enviar acciones a la store de Redux.
 *  useSelector: Se usa para acceder a las accciones del componentes
 */
// action de redux
import {crearNuevoProductoAction} from '../actions/productAction';
import {mostrarAlertaAction, ocultarAlertaAction} from '../actions/alertAction';

const NuevoProductos = ({history}) => {
    // State del components
    const [nombre, setguardarNombre] = useState('');
    const [precio, setguardarPrecio] = useState(0);


     // utilizamos use dispatch y la crea una funcion
     const dispatch = useDispatch();

     // Acceder el state del store
     const cargando = useSelector(state=>state.productos.loading);
     const error = useSelector(state => state.productos.error);
    // console.log(error);

     const  alerta = useSelector(state => state.alerta.alerta);

     /* NOTA IMPORTANTE Se accede al mismo state gracias al  store */

     // Llama el accion de product accion
     const agregarProducto = producto => dispatch( crearNuevoProductoAction(producto) );

     // Cuando el usuario haga nuevo submit
     const submitNuevoProducto = e =>{
         e.preventDefault();
 
         // Validar formulario
        if(nombre.trim() === '' || precio === 0){

            const alerta = {
                msg: 'Ambos Campos son Obligatorios',
                classes: 'alert alert-danger text-center text-uppercase p3'
            }

            dispatch(mostrarAlertaAction(alerta));
           return; 
        }
         // Si no hay errores

         dispatch(ocultarAlertaAction());
 
      // Crear el nuevo producto
         agregarProducto({
             nombre,
             precio
         });

         // Redireccionar al home
         history.push('/');
         /* Cuando se tiene 
         router-dom  se tiene acceso a estas propeidades*/
     }

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

                        {alerta ? <p className={alerta.classes}>
                            {alerta.msg}
                        </p>: null}

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
                                    value={nombre}
                                    onChange={e => setguardarNombre(e.target.value)}
                                    />
                            </div>
                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input 
                                    type="number"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="precio"
                                    value={precio}
                                    onChange={e=>setguardarPrecio(Number(e.target.value))}
                                    />    
                            </div>
                            <button 
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                                    Agregar
                            </button>
                        </form>
                        {cargando ? <p>Cargando...</p> : null}
                        {error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p>: null}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NuevoProductos;