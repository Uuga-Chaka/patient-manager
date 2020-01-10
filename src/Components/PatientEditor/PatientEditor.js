import React, { Component } from 'react';
import './PatientEditor.scss';

export default class PatientEditor extends Component {
    constructor(props) {
        super(props)

        this.state = {
            patientId: 1112230054,
            hstoryId: 432050
        }
    }

    render() {
        return (
            <div className="editor">
                <div className="editor-personal-data">
                    <input type="text" name="nombre" id="nombre" placeholder="Nombre" />
                    <div className="id-value">
                        <select name="tipo-id" id="tipo-id">
                            <option value="rc">R.C.</option>
                            <option value="ti">T.I.</option>
                            <option value="cc">C.C.</option>
                            <option value="ce">C.E.</option>
                            <option value="pa">P.A.</option>
                            <option value="ms">M.S.</option>
                            <option value="as">A.S.</option>
                        </select>
                        <input type="text" name="numero-id" id="Numero-id" placeholder="número de identidad" />
                    </div>
                    <input type="date" name="nacimiento" id="nacimiento" />
                </div>
                <div className="editor-diagnostico">
                    <div className="editor-history">
                        <textarea name="history" placeholder="Historia clínica..."></textarea>
                    </div>
                    <div className="editor-sesions">
                        <div className="editor-sintoms">
                            <div className="editor-sintom">
                                <p className="editor-sintom-tag">Diagnostico</p>
                                <p className="editor-sintom-id">#404</p>
                            </div>
                        </div>
                        <div className="editor-meeting-quantity">
                            <p>Sesiones</p>
                            <div className="editor-visual-quantity">
                                <div className="editor-visual-q"></div>
                                <div className="editor-visual-q"></div>
                                <div className="editor-visual-q"></div>
                                <div className="editor-visual-q"></div>
                            </div>
                            <p>3/8</p>
                        </div>
                        <div className="editor-sesions-descriptions">
                            <div className="sesion-description">
                                <div className="sesion-description__header">
                                    <input type="date" />
                                    <p className="sesion-number">Sesión #1</p>
                                </div>
                                <textarea className="sesion-text"></textarea>
                                <div className="sesion-description-options">+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
