import React, { Component } from 'react'
import './eStudent.css'

export class eStudent extends Component {
    render() {
        return (
            <div>
                <h1>
                    <br/>
                </h1>

                <h2>
                    <br/>
                </h2>
                <form>
                <div class="form-group col-md-11">
                    <label for="exampleInputEmail1">Correo Electronico:</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Correo Electronico"/>
                   
                </div>
                <div class="form-group col-md-11">
                    <label for="exampleInputPassword1">Contraseña:</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña"/>
                </div>
                <div class="form-group form-check d-flex justify-content-center">
                    <a href="/eStudentRegistro" target="_self">Regístrate como nuevo eStudent</a>

                </div>
                <div class=" d-flex justify-content-center">
                    <a class="btn btn-outline-success" type="submit" href="/eStudentPerfil">Iniciar sesión</a>
                </div>
            </form>
            </div>
        )
    }
}

export default eStudent
