import React, { Component } from 'react'
import './Index.css'
import Acerca from '../../assets/img/Acerca_de_nosotros.jpg'
import Como from '../../assets/img/Como_funciona.jpg'
import Areas from '../../assets/img/Areas.jpg'
import Formas from '../../assets/img/Formas_de_pago.jpg'
 
export class Index extends Component {
    render() {
        return (
     <div>

<main>

        <section id="Nosotros">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={Acerca} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-block d-md-block">
                    <h5 style={{color:"black"}}>Acerca de nosotros</h5>
                    <p style={{color:"black"}}>Todos hemos necesitado de ayuda en distintas áreas, ya sea con
                        idiomas o materias de educación básica y superior. Con eTeaching puedes escoger un
                        maestro cercano a tu zona para asesoría, clases virtuales o presenciales. Nuestros
                        profesores son sometidos a un proceso de selección y reciben retroalimentación
                        constante.</p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                </div>
            </div>
        </div>
        </section>

        <section id="Funciona">
        <div className="carousel-inner Funciona">
            <div className="carousel-item active">
                {<img src={Como} className="d-block w-100" 
                    alt="..."/>}
                <div className="carousel-caption d-block d-md-block">
                    <h5 style={{color:"black"}}>¿Cómo funciona?</h5>
                    <p ul className="lista">
                        <li style={{color:"black"}}>1. Regístrate con nosotros.</li>
                        <li style={{color:"black"}}>2. Selecciona tu zona.</li>
                        <li style={{color:"black"}}>3. Selecciona el profesor que más crees pueda cubrir tus necesidades
                            según su perfil.</li>
                        <li style={{color:"black"}}>4. Selecciona la modalidad: presencial o virtual.</li>
                        <li style={{color:"black"}}>5. Selecciona tu forma de pago.</li>
                        <li style={{color:"black"}}>6. Solicita tu clase en el calendario y acepta la confirmación del
                            maestro.</li>
                        <li style={{color:"black"}}>7. ¡Listo! Tu clase ha sido agendada.</li>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </p>
                </div>
            </div>
        </div>
    </section>

        <section id="Areas">
        <div className="carousel-inner">
            <div className="carousel-item active">
                {<img src={Areas} className="d-block w-100" alt="..."/>}
                <div className="carousel-caption d-flex flex-column align-items-start">
                    <h5 style={{color:"black"}}>Áreas</h5>
                    <p ul className="lista2">
                        <li style={{color:"black"}}>Idiomas</li>
                        <li style={{color:"black"}}>Ciencias sociales y de la comunicación</li>
                        <li style={{color:"black"}}>Ciencias puras y aplicadas</li>
                        <li style={{color:"black"}}>Computación y tecnologías de la información</li>
                        <li style={{color:"black"}}>Arte creativo y diseño</li>
                        <li style={{color:"black"}}>Derecho</li>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </p>
                </div>
            </div>
        </div>
        </section>

        <section id="Formas">
        <div className="carousel-inner">
            <div className="carousel-item active">
               { <img src={Formas} className="d-block w-100" alt="..."/> }
                <div className="carousel-caption d-flex flex-column align-items-end">
                        <h5 style={{color:"black"}}>Costos</h5>
                        <p ul className="lista3">
                            <li style={{color:"black"}}>Virtual: $150 x hr.</li>
                            <li style={{color:"black"}}>Presencial: $200 x hr.</li>
                        </p>
                        <br></br>
                    <h5 style={{color:"black"}}>Formas de Pago</h5>
                    <p ul className="lista4">
                        <li style={{color:"black"}}>Bitcoin</li>
                        <li style={{color:"black"}}>Paypal</li>
                        <li style={{color:"black"}}>Efectivo en Oxxo</li>
                        <li style={{color:"black"}}>Visa/Mastercard</li>
                        <li style={{color:"black"}}>American Express</li>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </p>
                </div>
            </div>
        </div>
        </section>





    </main>




     </div>

        )
    }
}

export default Index
