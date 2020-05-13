import React, { useState, useEffect } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

function ImageList(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const payload = await fetch(process.env.REACT_APP_API_URL+"profiles");
            const jsonData = await payload.json();
            setData(jsonData);
        };
        fetchData();
    }, []);

    return (
        <div className="image-list">
            <Carousel arrows dots>
                {data.map(item => (
                    <img src={item.imagen} alt={item.titulo} />
                ))}
            </Carousel>
        </div>
    );
}

export default ImageList