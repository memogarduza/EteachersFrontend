import React, { Component } from 'react'
import './eStudentPerfil.css'

export class eStudentPerfil extends Component {
    render() {
        return (

            <div>
                <div className="header">

                    <img className="avatar" src="./Imagenes/pp.jpg" alt=""/>
                        <h1 className="username">Raúl Hernández</h1>
</div>
                    <ul className="socials">
                        <li>
                            <i className="icon email"></i>
                            <a href="#">Correo Electronico</a>
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
                            Disfruto mucho practicar deportes extremos, me encanta viajar, leer y ver series.
</p>
                    </div>

                    <div className="about">
                        <h3>Edad: </h3>
                        <p>
                            26 años.
</p>
                    </div>

                    <div className="about">
                        <h3>Intereses: </h3>
                        <p>
                            Idiomas, libros y viajes.
</p>
                    </div>

                    <div className="about">
                        <h3>Zonas de preferencia: </h3>
                        <p>
                            Miguel Hidalgo, Cauhtémoc, Álvaro Obregón.
</p>
                    </div>

                    <div className="about">
                        <h3>Áreas de estudio de preferencia: </h3>
                        <p>
                            Inglés, Portugués, Historia.
</p>
                    </div>

                    <div className="container-fluid">

                        <ul className=""></ul>

                        <a className="btn btn-outline-success " type="submit" href="/misClases"> Historial de clases
    </a>
                        <a className="btn btn-outline-success " type="submit" href="/eStudentPrograma">Solicitar Clase</a>
                    </div>

                </div>
                )
            }
        }
        
        export default eStudentPerfil
