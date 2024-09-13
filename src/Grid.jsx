import React from 'react';
import Item from './Item'

import "./Grid.css"


const getImageURL = (image, base) => new URL(`./${base}/${image}`, import.meta.url).href


const Grid = ({items, base}) => {
    return (
        <div className="grid">
            {items.map((project, index) => (
                <Item 
                    key={index} 
                    image={getImageURL(project.image, base)}
                    title={project.title}
                    description={project.description}
                    url={project.url}
                />
            ))}
        </div>
    );
}

export default Grid;
