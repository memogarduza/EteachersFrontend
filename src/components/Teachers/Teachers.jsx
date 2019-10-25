import React, { Component } from 'react';
import axios from 'axios';

export class Teachers extends Component {
    state = {
        teachers:[]
    }

    componentDidMount(){
        axios.get('http://proyecto1-teacher.herokuapp.com/all/maestros')
        .then(response => {
            this.setState({
                teachers:response.data
            })
        })
    }

    renderTeachers(){
        return this.state.teachers.map(teacher => {
            return (
                <div>
                    <div class="card" style={{width: "18rem"}}>
                        <div class="card-body">
                            <h5 class="card-title">{teacher.correo}</h5>
                            <p class="card-text">{teacher.nombre}</p>
                            <p class="card-text">{teacher.apellidos}</p>
                            <p class="card-text">{teacher.areas}</p>
                            <p class="card-text">{teacher.experiencia}</p>
                            <p class="card-text">{teacher.acercaDe}</p>
                            <p class="card-text">{teacher.celular}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {
                    this.renderTeachers()
                }
            </div>
        )
    }
}

export default Teachers
