import React, { Component } from 'react'
import './eStudentPrograma.css'
import {Link} from 'react-router-dom'

export class eStudentPrograma extends Component {
    render() {
        return (
            <div>
                <h1>
                    <br/>
                </h1>
            <div className="form-group col-md-6">
            <label for="inputState">Zona</label>
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


        <div className="form-group col-md-4 fans">
            <label for="inputState">Área a estudiar</label>
            <select id="inputState" className="form-control">
                <option selected>Selecciona área a estudiar...</option>
                <option>Inglés</option>
                <option>Francés</option>
                <option>Italiano</option>
                <option>Portugués</option>
                <option>Alemán</option>
                <option>Náhuatl</option>
                <option>Matemáticas</option>
                <option>Cálculo</option>
                <option>Física</option>
                <option>Química</option>
                <option>Historia</option>
                <option>Filosofía</option>
                <option>Programación</option>
                <option>Derecho</option>
                <option>Adobe</option>
            </select>
        </div>

        <div className="form-group col-md-4 fans">
                <label for="inputState">Modalidad</label>
                <select id="inputState" className="form-control">
                    <option selected>Selecciona modalidad...</option>
                    <option>Presencial</option>
                    <option>Virtual</option>
                </select>
            </div>
            <Link to='/teachers'> 
             <h1><br/></h1>
        <button onclick="myFunction()" className= "ml-3">Solicita tu clase</button>
            </Link>
</div>
        
        )
    }
}

export default eStudentPrograma
