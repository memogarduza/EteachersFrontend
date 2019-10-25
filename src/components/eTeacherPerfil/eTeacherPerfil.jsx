import React, { Component } from 'react'
import './eTeacherPerfil.css'

export class eTeacherPerfil extends Component {
    state = {

    }

    componentDidMount(){
        //peticion
    }

    render() {
        return (
            <div>
               <h1>
                    <br/>
                </h1>
                
                <div className="headerT">

<img className="avatar" src="" alt=""/>
<h1 className="username">María Rodríguez</h1>
</div>
<ul className="socials">
<li>
    <i className="icon email"></i>
    <a href="#">Correo electrónico</a>
</li>
<li>
    <i className="icon facebook"></i>
    <a href="#">Facebook</a>
</li>
<li>
    <i className="icon twitter"></i>
    <a href="#">Twitter</a>
</li>
</ul>

<div className="about">
<h3>Acerca de mi: </h3>
<p>
    Disfruto mucho dar clases a niños y adultos. Mis intereses son leer, viajar y cocinar.
</p>
</div>

<div className="about">
<h3>Grado máximo de estudios: </h3>
<p>
    Licenciatura en filosofía.
</p>
</div>

<div className="about">
<h3>Áreas de enseñanza: </h3>
<p>
    Filosofía, matemáticas e Inglés.
</p>
</div>

<div className="about">
<h3>Experiencia: </h3>
<p>
      Más de 10 años con niños, docente en distintas universidades nacionales e internacionales por más de 15 años.
</p>
</div>

<div className="dropdown">
<button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
    aria-haspopup="true" aria-expanded="false">
    Solicitudes
</button>
<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">Presenciales </a>
    <a className="dropdown-item" href="#">Virtuales</a>

</div>
</div>

                
            </div>
        )
    }
}

export default eTeacherPerfil
