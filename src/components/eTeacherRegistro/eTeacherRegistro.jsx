import React, { Component } from 'react'
import './eTeacherRegistro.css'
import axios from 'axios';

export class eTeacherRegistro extends Component {
    state={
        correo:"",
        contraseña:"",
        nombre:"",
        apellidos:"",
        gradoMáximo:"",
        areas:"",
        foto:"",
        experiencia:"",
        acercaDe:"",
        celular:"",
        direccion:"",
    }

    onInputChange =(e)=>{
        const {id,value} = e.target 
        this.setState({
            [id]:value
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        axios.post('http://proyecto1-teacher.herokuapp.com/create/maestro',this.state)
        .then(res => alert(res))
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <p className="font-weight-bold">Trabaja en tus tiempos libres donde tú quieras enseñando lo que sabes y lo que más te
            gusta.</p>

                <br></br>
                <form onSubmit={this.onSubmitForm}>
                <div className="form-row fans">
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Correo Electronico:</label>
                        <input type="email" className="form-control" id="correo" placeholder="Correo Electronico" onChange={this.onInputChange} value={this.state.correo} />
                    </div>
                    <div className="form-group col-md-6 fans">
                        <label for="inputPassword4">Contraseña: </label>
                        <input type="password" className="form-control" id="contraseña" placeholder="********" onChange={this.onInputChange} value={this.state.contraseña}/>
                    </div>
                </div>
                <div className="form-group fans">
                    <label for="inputAddress">Nombre:</label>
                    <input type="text" className="form-control" id="nombre" placeholder="Jorge Alejandro" onChange={this.onInputChange} value={this.state.nombre}/>
                </div>

                <div className="form-group fans">
                    <label for="inputAddress">Apellidos:</label>
                    <input type="text" className="form-control" id="apellidos" placeholder="Hernandez Rodriguez" onChange={this.onInputChange} value={this.state.apellidos}/>
                </div>

                <div className="form-group fans">
                    <label for="inputAddress">Grado máximo de estudios:</label>
                    <input type="text" className="form-control" id="gradoMáximo" placeholder="Secundaria, Preparatoria, Licenciatura, Maestria" onChange={this.onInputChange} value={this.state.gradoMáximo}/>
                </div>

                <div className="form-group fans">
                    <label for="inputAddress">Áreas de enseñanza:</label>
                    <input type="text" className="form-control" id="areas"
                        placeholder="Idiomas, Publicidad, Ciencias Exactas" onChange={this.onInputChange} value={this.state.areas} />
                </div>
                <div className="form-group fans">
                    <label for="inputAddress">Experiencia:</label>
                    <input type="text" className="form-control" id="experiencia"
                        placeholder="Estudios, Cursos, Lugares donde Trabajas" onChange={this.onInputChange} value={this.state.experiencia} />
                </div>

                <div className="form-group fans">
                    <label for="inputAddress">Acerca de mi:</label>
                    <input type="text" className="form-control" id="acercaDe" placeholder="Cuentanos como eres" onChange={this.onInputChange} value={this.state.acercaDe}/>
                </div>


                <div className="form-group fans">
                    <label for="inputAddress">Celular:</label>
                    <input type="number" className="form-control" id="celular" placeholder="5562460127" onChange={this.onInputChange} value={this.state.celular}/>
                </div>

                <div className="form-group fans">
                    <label for="inputAddress2">Direccion:</label>
                    <input type="text" className="form-control" id="direccion" placeholder="Calle Numero Colonia" onChange={this.onInputChange} value={this.state.direccion}/>
                </div>

                <button className="btn btn-outline-success" type="submit">Regístrate</button>
                </form>

                {/* <div className="form-row fans">
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
                        <label for="inputZip">Codigo Postal:</label>
                        <input type="text" className="form-control" id="inputZip" />
                    </div>
                </div> */}
                
            </div>
        )
    }
}

export default eTeacherRegistro
