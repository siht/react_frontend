import React, { useState, useRef } from 'react'

function Formulary(props) {
    const [nombre, setNombre] = useState('');
    const [titulo, setTitulo] = useState('');
    // const fileInput = React.createRef();
    const fileInput = useRef(null);

    async function onSubmit(e) {
        e.preventDefault();
        const payload = await fetch(process.env.REACT_APP_API_URL + 'profile/new/', {
            method: 'POST',
            body: JSON.stringify({nombre: nombre, titulo: titulo}),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        const newProfile = await payload.json();
        const form = new FormData();
        form.append("image", fileInput.current.files[0]);
        const dataAndSettingsToUpdateProfile = {
            method: "POST",
            body: form
        };
        const payloadImage = await fetch(
            process.env.REACT_APP_API_URL + 'profile/' + newProfile._id + '/upload-image',
            dataAndSettingsToUpdateProfile
        );
    }

    return (
        <div className="post-form">
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="titulo">Título:</label>
                    <input type="text" name="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="imagen">Imagen:</label>
                    <input type="file" name="imagen" ref={fileInput} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Formulary
