import React from 'react';
import { useHistory} from 'react-router-dom';
import Swal from 'sweetalert2';
// 
import {useDispatch} from 'react-redux'; 
import {borrarProductoAction, obtenerProductoEditar} from '../actions/productAction';


const Producto = ({producto}) => {
    // useDis
    const dispatch = useDispatch();
    const history = useHistory(); // Habilitar history para redireccionar
    // confirmar si desea eliminarlo
    
    const confirmarEliminarProducto = id =>{
        // Preguntar al usaurio

        Swal.fire({
            title: '¿Estas seguro?',
            text: "Un producto que se elimina no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
                dispatch(borrarProductoAction(id));
            }
          })



       
    }

    // Funcion que redirig de forma programada
    const rediccionarEdicion = producto =>{
        dispatch(obtenerProductoEditar(producto));
        history.push(`/productos/editar/${producto.id}`);
    }

    /*
    
    <Link 
                    to={`/productos/editar/${id}`} 
                    className="btn btn-primary mr-2">
                    Editar
                </Link>
    */


    //Extrayendo
    const {nombre, precio, id} =producto;
    return ( 
        <tr>
            <td>{nombre}</td>
            <td><span className="font-weight-bold">$ {precio}</span></td>
            <td className="acciones">
         
                <button type="button"
                        onClick={()=>rediccionarEdicion(producto)}
                        className="btn btn-primary mr-2"
                >
                        Editar
                </button>
                <button 
                    type="button"
                    className="btn btn-danger"
                    onClick={()=>confirmarEliminarProducto(id)}
                    >
                        Eliminar
                    </button>
            </td>
        </tr>

     );
}
 
export default Producto;