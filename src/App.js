import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import popper from 'popper.js';
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css'


import Navbar from './components/Navbar/Navbar'
import ETeacher from './components/eTeacher/eTeacher'
import EStudent from './components/eStudent/eStudent'
import ETeacherPerfil from './components/eTeacherPerfil/eTeacherPerfil'
import EStudentPerfil from './components/eStudentPerfil/eStudentPerfil'
import ETeacherRegistro from './components/eTeacherRegistro/eTeacherRegistro'
import EStudentRegistro from './components/eStudentRegistro/eStudentRegistro'
import EStudentPrograma from './components/eStudentPrograma/eStudentPrograma'
import misClases from './components/misClases/misClases'
import index from './components/Index/Index.jsx'
import Teachers from './components/Teachers/Teachers'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <main className=" content-app">
          <Route exact path='/' component={index}/>
          <Route exact path='/eTeacher' component={ETeacher}/>
          <Route exact path='/eStudent' component={EStudent}/>
          <Route exact path='/eTeacherPerfil' component={ETeacherPerfil}/>
          <Route exact path='/eStudentPerfil' component={EStudentPerfil}/>
          <Route exact path='/eTeacherRegistro' component={ETeacherRegistro}/>
          <Route exact path='/eStudentRegistro' component={EStudentRegistro}/>
          <Route exact path='/eStudentPrograma' component={EStudentPrograma}/>
          <Route exact path='/misClases' component={misClases}/>
          <Route exact path='/teachers' component={Teachers}/>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
