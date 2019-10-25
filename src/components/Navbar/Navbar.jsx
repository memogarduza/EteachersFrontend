import React, { Component } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import Logo from '../../assets/img/logo.jpg'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor:'#c9e265'}}>
            <a className="navbar-brand" href="/">
                <img src={Logo} alt="Logo eTeachingSchool"
                    style={{width: '100px'}}/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item active mr-5">
                            <p className="nav-link" href="#Nosotros">Acerca de nosotros<span className="sr-only">(current)</span></p>
                    </li>
                    <li className="nav-item active mr-5"><a className="nav-link" href="#Funciona"> ¿Cómo funciona? <span
                                className="sr-only">(current)</span> </a></li>
                    <li className="nav-item active mr-5"><a className="nav-link" href="#Areas"> Áreas <span
                                className="sr-only">(current)</span> </a></li>
                    <li className="nav-item active mr-5"><a className="nav-link" href="#Formas"> Costos <span
                                className="sr-only">(current)</span> </a></li>
                </ul>
            </div>

            <div className="container-fluid col-md-3">
                <ul className="nav navbar-nav navbar-right"></ul>

                <Link to='/eTeacher'>
                    <p className="btn btn-outline-success hola" > eTeacher</p>
                </Link>
                <Link to='/eStudent'>
                    <p className="btn btn-outline-success" >eStudent</p>
                </Link>
            </div>

        </nav>
            </div>
        )
    }
}

export default Navbar
