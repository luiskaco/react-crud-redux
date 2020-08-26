//Importante type
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR
} from '../types';

//Nota: Accion son las funciones que modifican el State
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

// Crear nuevos productos
export function crearNuevoProductoAction(producto) {
    return async (dispatch) =>{
         // console.log(producto);

        try {
            dispatch( agregarProducto() );  
            // Insertar en la base de datos
           await clienteAxios.post('/productos', producto);
  
           dispatch( agregarProductoExito(producto) );

           Swal.fire('Correcto','El producto se agregó correctamente','success')



        } catch (error) {
            console.log(error);
            // Si hay error al cambiar el state
            dispatch( agregarProductoError(true));
            // Alerta de error
            Swal.fire({
                icon:'error',
                title:'Hubo un error',
                text:'Hubo un error, Intente de nuevo'
            })
        }
    }
}

const agregarProducto = () =>({
    type: AGREGAR_PRODUCTO,
    payload:true
});

// Si el producto se guardo en la base de datos
const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});
// Si hubo un error
const agregarProductoError = estado => ({
    type:AGREGAR_PRODUCTO_ERROR,
    payload: estado
});

// funcion que descarga los productos de la base de datos
export function obtenerProductosAction() {
    return async (dispatch) =>{
        dispatch( descargarProductos() );
       
        try {
           /* setTimeout(async ()=>{
                const respuesta = await clienteAxios.get('/productos');
                //console.log(respuesta.data);
                dispatch( descargaProductosExitosa(respuesta.data) );
    
            }, 2000);*/
            
            
             const respuesta = await clienteAxios.get('/productos');
             dispatch( descargaProductosExitosa(respuesta.data) );
            
        } catch (error) {
            console.log(error);
            dispatch( descargaProductosError())
            
        }
        

    }
}

const descargarProductos = () =>({
    type:COMENZAR_DESCARGA_PRODUCTOS,
    payload:true
});

const descargaProductosExitosa = productos =>(console.log(productos),
   {
       type: DESCARGA_PRODUCTOS_EXITO,
       payload:productos
   }
);

const descargaProductosError  = () =>({
    type:DESCARGA_PRODUCTOS_ERROR,
    payload:true
});

/*
    Las api json server dan errores extraños para ser manipulados
*/

