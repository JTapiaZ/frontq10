import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import decode from 'jwt-decode'

import RouteApp from './components/App';
import getStore from './store/getStore';

import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import Cursos from './components/Cursos';
import Docentes from './components/Docentes';
import Creditos from './components/Creditos';
import Counter from './components/Counter';
import Admin from './components/Admin';
import Estudiantes from './components/Estudiantes';
import MatriculasEstudiantes from './components/MatriculasEstudiantes';
import NotasCredito from './components/NotasCredito';
import PagosCredito from './components/PagosCredito';
import PagosPendientes from './components/PagosPendientes';
import PagosRealizados from './components/PagosRealizados';
import notasCreditoRelacionesPagosRegulares from './components/notasCreditoRelacionesPagosRegulares';
import EvaluacionesCuantitativas1 from './components/EvaluacionesCuantitativas1';
import EvaluacionesCuantitativas2 from './components/EvaluacionesCuantitativas2';
import HomologacionesHabilitacionesCuantitativas from './components/HomologacionesHabilitacionesCuantitativas';
import DisenoCurricularModulos from './components/DisenoCurricularModulos';
import DisenoCurricularAsignaturas from './components/DisenoCurricularAsignaturas';
import Login from './components/Login';

const { store } = getStore();

const isAuthenticated = () => {
  const token = localStorage.getItem('token')
  let isValid = true
  try {
      isValid = decode(token);
  } catch (e) {
      return false;
  }
  return isValid;

};

const MyRoute = (props) => (
  isAuthenticated()
      ? <RouteApp {...props} />
      : <Redirect to="/login"/>
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <RouteApp exact path={'/login'} component={Login} />
        <RouteApp exact path={'/'} component={Login} />
        <MyRoute path={'/cursos'} component={Cursos} />
        <MyRoute path={'/disenocurricularmodulos'} component={DisenoCurricularModulos} />
        <MyRoute path={'/disenocurricularasignaturas'} component={DisenoCurricularAsignaturas} />
        <MyRoute path={'/docentes'} component={Docentes} />
        <MyRoute path={'/estudiantes'} component={Estudiantes} />
        <MyRoute path={'/evaluacionescuantitativas1'} component={EvaluacionesCuantitativas1} />
        <MyRoute path={'/evaluacionescuantitativas2'} component={EvaluacionesCuantitativas2} />
        <MyRoute path={'/homologacioneshabilitacionescuantitativas'} component={HomologacionesHabilitacionesCuantitativas} />
        <MyRoute path={'/matriculasestudiantes'} component={MatriculasEstudiantes} />
        <MyRoute path={'/notascredito'} component={NotasCredito} />
        <MyRoute path={'/notascreditorelacionespagosregulares'} component={notasCreditoRelacionesPagosRegulares} />
        <MyRoute path={'/pagoscredito'} component={PagosCredito} />
        <MyRoute path={'/pagospendientes'} component={PagosPendientes} />
        <MyRoute path={'/pagosrealizados'} component={PagosRealizados} />
        <MyRoute path={'/creditos'} component={Creditos} />
        <MyRoute path={'/counter'} component={Counter} />
        <MyRoute path={'/administrativos'} component={Admin} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
