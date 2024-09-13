import React from 'react';
import "./Item.css"


const Item = ({ image, title, description, url }) => {
    return (
        <div className="item" onClick={() => window.open(url, '_blank')}>
            <img src={image} alt={title} className="image" />
            <div className="content">
                <h3 className="title">{title}</h3>
                <p className="description">{description}</p>
            </div>
        </div>
    );
}

export default Item;