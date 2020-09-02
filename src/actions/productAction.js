//Importante type
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR
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

const descargaProductosExitosa = productos =>(/*console.log(productos),*/
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


// Seleciona y elimina el prodcuto 
export function borrarProductoAction(id){
    return async (dispatch) => {
        dispatch(obtenerProductoEliminar(id));
      //  console.log(id);

        try {
            await clienteAxios.delete(`/productos/${id}`);
            //console.log(resultado);
            dispatch(eliminarProductoExito());

            Swal.fire(
                'Eliminado!',
                'El producto se eliminó correctamente.',
                'success'
              )
        } catch (error) {
            console.log(error);
            dispatch(eliminarProductoError());
        }
    }
}

const obtenerProductoEliminar = id =>({
    type:OBTENER_PRODUCTO_ELIMINAR,
    payload:id
});

const eliminarProductoExito = () =>({
    type: PRODUCTO_ELIMINADO_EXITO,
  
})

const eliminarProductoError = () =>({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload:true
});


/* COLOCAR PRODUCTO EN EDICION*/

export function obtenerProductoEditar(producto){
    return (dispatch) =>{
        dispatch(obtenerProductoEditarAction(producto));
    }
}

const obtenerProductoEditarAction = producto => ({
    type:OBTENER_PRODUCTO_EDITAR,
    payload:producto
})

// Esta un registro en la api y en el state
export function editarProductoAction(producto){
    return async (dispatch) => {
           //dispatch(editarProducto());
           
           try {
              await clienteAxios.put(`/productos/${producto.id}`, producto);

              dispatch(editarPRoductoExito(producto));
            } catch (error) {
                console.log(error);
                dispatch(editarProductoError());
            }
    }
}

/*const editarProducto = () =>({
    type:COMENZAR_EDICION_PRODUCTO,
    
})*/

const editarPRoductoExito = producto => ({
    type:PRODUCTO_EDITADO_EXITO,
    payload: producto
})

const editarProductoError = () =>({
    type: PRODUCTO_EDITADO_ERROR,
    payload: true
})