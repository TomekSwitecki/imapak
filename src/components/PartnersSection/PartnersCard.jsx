
import React from 'react';
import { Children } from 'react';
import Tag from '../tag/Tag';
import Button, { ButtonShape, ButtonColor, ButtonType } from "../button/Button";


const PartnersCard = ({ imageSrc, description, linkTo, id, empty }) => {
    const handleButtonClick = () => {
        if (linkTo) {
            window.open(linkTo, '_blank'); // Open the link in a new tab/window
        }
    };

    const cardClass = `partner-card`;
    if (!empty)
        return (
            <div id={id} className={cardClass}>

                <Tag text={"Partner"} />
                <div className='partner-card__content'>

                    {imageSrc && <img className='partner-card__ilustration' src={imageSrc}></img>}
                    {description && <p className="partner-card__description">{description}</p>}

                </div>
                <Button
                    type={ButtonType.Filled}
                    color={ButtonColor.Gray}
                    append={<box-icon name='right-arrow-alt' ></box-icon>}
                    text={"Dowiedz się więcej!"}
                    onClick={handleButtonClick}
                />
            </div>
        );

    if (empty) {
        return (
            <div id={id} className={"partner-card partner-card--empty"}>

            </div>
        );
    }

};


export default PartnersCard;
