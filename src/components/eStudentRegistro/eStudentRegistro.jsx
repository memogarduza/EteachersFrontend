import React, { Component } from 'react'
import './eStudentRegistro.css'

export class eStudentRegistro extends Component {
    render() {
        return (
            <div>
                <p className= "font-weight-bold">Recibe clases y asesorías con profesores capacitados de tu elección en dónde tú quieras y cuando tú quieras.</p>
     
     <br></br>            
     
     <div className="form-row fans">
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Correo Electronico:</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Correo Electronico"/>
                    </div>
                    <div className="form-group col-md-6 fans">
                        <label for="inputPassword4">Contraseña: </label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Contraseña"/>
                    </div>
                </div>
                <div className="form-group fans">
                    <label for="inputAddress">Nombre:</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Jorge Alejandro"/>
                </div>

                <div className="form-group fans">
                        <label for="inputAddress">Apellidos:</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Hernandez Rodriguez"/>
                    </div>

                    <div className="form-group fans">
                            <label for="inputAddress">Nivel máximo de estudios:</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="Licenciatura, Maestria"/>
                        </div>
                    
                        <div className="form-group fans">
                                <label for="inputAddress">Áreas en las que buscas asesorias:</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="Idiomas, Publicidad, Ciencias Exactas"/>
                            </div>
                        
                             <div className="form-group fans">
                                        <label for="inputAddress">Acerca de ti:</label>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="Cuentanos como eres"/>
                                    </div>   


                            <div className="form-group fans">
                                    <label for="inputAddress">Celular:</label>
                                    <input type="number" className="form-control" id="inputAddress" placeholder="5562460127"/>
                                </div>

                <div className="form-group fans">
                    <label for="inputAddress2">Dirección:</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Calle Numero Colonia"/>
                </div>
                <div className="form-row fans">
                    <div className="form-group col-md-6">
                        <label for="inputCity">Ciudad:</label>
                        <select id="inputState" className="form-control">
                                <option selected>Selecciona ciudad...</option>
                                <option>CDMX</option>
                                <option>EDOMEX</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4 fans">
                        <label for="inputState">Zona de preferencia:</label>
                        <select id="inputState" className="form-control">
                                <option selected>Selecciona tu alcaldía o municipio...</option>
                                <option>Álvaro Obregón</option>
                                <option>Azcapotzalco</option>
                                <option>Benito Juárez</option>
                                <option>Coyoacán</option>
                                <option>Cuajimalpa de Morelos</option>
                                <option>Cuauhtémoc</option>
                                <option>Gustavo A. Madero</option>
                                <option>Iztacalco</option>
                                <option>Iztapalapa</option>
                                <option>Magdalena Contreras</option>
                                <option>Miguel Hidalgo</option>
                                <option>Milpa Alta</option>
                                <option>Tláhuac</option>
                                <option>Tlalpan</option>
                                <option>Venustiano Carranza</option>
                                <option>Xochimilco</option>
                                <option>Atizapán</option>
                                <option>Atizapán de Zaragoza</option>
                                <option>Coacalco de Barriozábal</option>
                                <option>Cuautitlán</option>
                                <option>Chalco</option>
                                <option>Chiconcuac</option>
                                <option>Chimalhuacán</option>
                                <option>Ecatepec de Morelos</option>
                                <option>Huixquilucan</option>
                                <option>Ixtapaluca</option>
                                <option>Lerma</option>
                                <option>Metepec</option>
                                <option>Naucalpan de Juárez</option>
                                <option>Nezahualcoyotl</option>
                                <option>Tecámac</option>
                                <option>Texcoco</option>
                                <option>Tlalnepantla de Baz</option>
                                <option>Toluca</option>
                                <option>Tultepec</option>
                                <option>Tultitlán</option>
                                <option>Zumpango</option>
                                <option>Cuautitlán Izcalli</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2 fans">
                        <label for="inputZip">Código Postal:</label>
                        <input type="text" className="form-control" id="inputZip"/>
                    </div>
                </div>
              <a className="btn btn-outline-success" type="submit" href="/eStudentPerfil">Regístrate</a>
                </div>   
    
        )
    }
}

export default eStudentRegistro
