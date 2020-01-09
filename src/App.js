import React, { Component } from 'react';

import UserList from './Components/UserList/UserList';
import PatientEditor from './Components/PatientEditor/PatientEditor';
import NavBar from './Components/NavBar/NavBar';

import './App.scss';

const { ipcRenderer } = window.require('electron');

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      "usuarios": {
        "1112230054": {
          "_id": "1112230054",
          "nombre": "Juan Pablo Gallego Arias",
          "fecha_nacimiento": "17-10-1996",
          "sesion": [271928, 271921],
          "id_number": 29703672
        },
        "29703672": {
          "_id": "29703672",
          "nombre": "Olga Lucia Arias Arias",
          "fecha_nacimiento": "17-10-1996",
          "sesion": [271928, 271921],
          "id_number": 29703672
        },
        "2970367e2": {
          "_id": "2970367e2",
          "nombre": "Olga Lucia Arias Arias",
          "fecha_nacimiento": "17-10-1996",
          "sesion": [271928, 271921],
          "id_number": 29703672
        },
        "2970367w2": {
          "_id": "2970367w2",
          "nombre": "Olga Lucia Arias Arias",
          "fecha_nacimiento": "17-10-1996",
          "sesion": [271928, 271921],
          "id_number": 29703672
        },
        "2970367s2": {
          "_id": "2970367s2",
          "nombre": "Olga Lucia Arias Arias",
          "fecha_nacimiento": "17-10-1996",
          "sesion": [271928, 271921],
          "id_number": 29703672
        }
      },
      currentHistory: [],
      navBar: ['holaadsfsfhkajdfkbjkja', 'hodddddsssssssla', 'hola', 'hola']
    }
  }

  componentDidMount() {
    ipcRenderer.on('load-patient-data', (e, args) => {
      console.log(args);
      this.setState(args);
    });
  }

  savePatient = (key, value) => {
    ipcRenderer.send('set', { [key]: value })
  }

  createPatient = (key, value) => {
    if (this.state.usuarios[key] === 'undefined') {
      this.setState({ usuarios: { ...this.state.usuarios, [key]: value } });
    } else {
      console.log('Paciente ya existe');
      //Create ui response
    }
  }

  render() {
    return (
      <div className="app">
        <UserList
          patientList={this.state.usuarios}
          addPatient={this.createPatient}
        />
        <div className="editing">
          <NavBar
            navBar={this.state.navBar}
          />
          <PatientEditor />
        </div>
      </div>
    )
  }
}

export default App
