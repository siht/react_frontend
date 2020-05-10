import React from 'react'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

function ImageList(props) {  
    return (
        <div className="image-list">
            <Carousel arrows dots>
                <img src="https://cuarzos.info/wp-content/uploads/2019/10/piedras-verdes.jpg" />
                <img src="https://www.gemselect.com/graphics/green-gemstone-list-compilation-gemselect.jpg" />
                <img src="https://significadodelaspiedras.com/wp-content/uploads/2017/09/miedras-verdes.jpg" />
                <img src="https://www.gemselect.com/graphics/gems-by-color-green-gems-gemselect.jpg" />
                <img src="https://comps.canstockphoto.es/piedras-conjunto-verde-piedras-retrato_csp36721419.jpg" />
                <img src="https://significadodelaspiedras.club/wp-content/uploads/2019/10/significado-de-las-piedras-verdes.jpg" />
            </Carousel>
        </div>
    )
}

export default ImageList