import React from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import AppConstruccion from './PAGINA CONSTRUCCION/PaginaConstruccion';
import AppHome from './PAGINA INICIO/AppInicio';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AppHome}></Route>
        <Route exact path="/CONSTRUCCION" component={AppConstruccion}></Route>
      </Switch>
    </Router>
  );
}
export default App;