import React from 'react';

const Inputfield = ({ label, value, onChange, placeholder, isTextArea, name, type, required }) => {
    if (isTextArea) {
        return (
            <div className="inputfield">
                <label className='inputfield__label'>{label}</label>
                <textarea
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="input"
                    name={name}
                    required={required}
                />
            </div>
        );
    } else {
        return (
            <div className="inputfield">
                <label className='inputfield__label'>{label}</label>
                <input
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="input"
                    name={name}
                    type={type}
                    required={required}
                />
            </div>
        );
    }
};

export default Inputfield;
