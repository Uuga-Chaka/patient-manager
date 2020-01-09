import React, { Component } from 'react'
import './UserList.scss'

export class UserList extends Component {
    constructor(props) {
        super(props)
        console.log(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="menu">

                <div className="menu-actions">
                    <p onClick={() => this.props.createPatient}>+</p>
                </div>
                <div className="menu-list">
                    {Object.keys(this.props.patientList).map(key => patient(this.props.patientList[key]))}
                </div>
            </div>
        )
    }
}

const patient = (args) => {
    return (
        <div className="menu-patient" key={args._id} onClick={(e) => console.log("dropdown menu")}>
            <div className="menu-userdata">
                <div className="data">
                    <h3>{args.nombre}</h3>
                    <p>C.C. {args.id_number}</p>
                </div>
                <div className="arrow"></div>
            </div>
            <div className="menu-sesion">

            </div>
        </div>
    )
}

// const sesionByPatient = (id) => {
//     return (
//         <h1 key={id}></h1>
//     )
// }


export default UserList
