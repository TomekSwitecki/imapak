
import React from 'react';


const ListItem = ({ label, icon }) => {
    return (
        <div className="list-item">
            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.667 7L0.666992 13.9282L0.666993 0.0717964L12.667 7Z" fill="#D2CBC0" />
            </svg>

            <span className="list-item-label">{label}</span>
        </div>
    );
};


export default ListItem;