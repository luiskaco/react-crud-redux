import React from 'react';
import Header from './components/header';
import Productos from './components/product';
import NuevoProducto from './components/new-product';
import EditarProducto from './components/edit-product';


// React router
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';
//Nota: haciendo disponbile todoas las funcioens y variables

function App() {
  return (
   <Router>
    <Provider store={store}>
        <Header />
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Productos} />
            <Route exact path="/productos/nuevo" component={NuevoProducto} /> 
            <Route exact path="/productos/editar/:id" component={EditarProducto} /> 
          </Switch>
        </div>
      </Provider>
   </Router>
  );
}

export default App;
