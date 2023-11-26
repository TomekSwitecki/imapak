
import React from 'react';
import { Children } from 'react';
import Tag from '../tag/Tag';



const PlainCard = ({ id, title, imageSrc, description, type, children, TagText, onClick }) => {


    const cardClass = `plain-card plain-card--${type}`;

    if (!type) {
        return (
            <div id={id} className={"plain-card"}>
                {imageSrc && <img className='plain-card__ilustration' src={imageSrc}></img>}
                <div className='plain-card__content'>
                    <div>
                        {children}
                        {title && <h2 className="plain-card__title">{title}</h2>}
                        {description && <p className="plain-card__description">{description}</p>}
                    </div>
                </div>
            </div>
        );
    }

    if (type == "modern") {
        return (
            <div id={id} className={cardClass} onClick={onClick}>
                <Tag text={TagText} />
                <div className='plain-card__content' >
                    {title && <span className="plain-card--modern__title">{title}</span>}
                    {imageSrc && <img className='plain-card__ilustration' src={imageSrc}></img>}
                </div>
            </div>
        );
    }

};


export default PlainCard;
