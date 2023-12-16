// PersonCard.js

import React from 'react';

import ContactItem from './ContactItem';
import PlainCard from '../PlainCard/PlainCard';
const PersonCard = ({ name, email, mobileNumber, telNumber, faxNumber, photoSrc, role }) => {
    return (

        <PlainCard>
            <div className="person_wrapper">
                <img className='person__photo' src={photoSrc} alt={name} />
                <div className="person__data">
                    <span className="person__name">{name}</span>
                    <span className="person__email">{email}</span>
                    <span className="person__role">{role}</span>
                    <div className="contact__item-list">
                        <ContactItem label="Tel" number={telNumber} />
                        {/* <ContactItem label="Mobile" number={mobileNumber} />
                        <ContactItem label="Fax" number={faxNumber} /> */}


                    </div>
                </div>
            </div>
        </PlainCard>

    );
};

export default PersonCard;
