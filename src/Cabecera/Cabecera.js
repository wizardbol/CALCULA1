import React, { Component } from 'react';
import Pie from '../Pie/Pie';

class Cabecera extends Component {

    render() {
        const fecha=new Date().getUTCFullYear();
        const nombre=this.props.nombre;
        return (
            <div>
                <h1>Bienvenidos! </h1>
            </div>
        );
    }
}

export default Cabecera;
