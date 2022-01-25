import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SLoad, SPage, SText, SView } from 'servisofts-component';
import usuario from '../../Services/Usuario/Components/usuario';
import Barra from './Barra';
import Inmueble from './Inmueble';

const INMUEBLES = {
    "1": {
        key: "1",
        descripcion: "Santa Maria 1",
        direccion: "Calle 2 # 2-2",
        tipo: "Condominio",
    },

    "2": {
        key: "2",
        descripcion: "Santa Maria 2",
        direccion: "Calle 2 # 2-2",
        tipo: "Departamento",
    },
    "3": {
        key: "2",
        descripcion: "Santa Maria 2",
        direccion: "Calle 2 # 2-2",
        tipo: "Departamento",
    }, "4": {
        key: "2",
        descripcion: "Santa Maria 2",
        direccion: "Calle 2 # 2-2",
        tipo: "Departamento",
    }, "5": {
        key: "2",
        descripcion: "Santa Maria 2",
        direccion: "Calle 2 # 2-2",
        tipo: "Departamento",
    },
}

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getLista() {
        return Object.keys(INMUEBLES).map(key => {
            var obj = INMUEBLES[key];
            return <>



                <Inmueble data={obj} />


            </>
        })
    }
    render() {
        if (!usuario.Actions.validateSession(this.props)) {
            return <SLoad />
        }
        return (
            <>
                <Barra />
                <SPage title={'HomePage'} hidden>
                    <SHr />
                    <SView col={"xs-12"} row center  >
                        {this.getLista()}
                    </SView>
                </SPage>
            </>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(HomePage);