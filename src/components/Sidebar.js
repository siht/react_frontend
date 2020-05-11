import React from 'react'
import { Link } from "react-router-dom";

function Sidebar(props) {  
    return (
        <div className="side-bar">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/insert">Insertar nuevo</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar