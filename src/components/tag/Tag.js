import React from 'react';

const Tag = ({ text }) => {
    return (
        <div className="tag">
            <span className='tag__slash'>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="18" viewBox="0 0 8 18" fill="none">
                    <path d="M3.13043 0H8L4.86957 18H0L3.13043 0Z" fill="#FACE91" />
                </svg></span>
            <div className='tag__content'>{text}</div>
        </div>
    );
};


export default Tag;