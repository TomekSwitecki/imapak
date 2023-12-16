import React, { useState, useRef } from 'react';
// import { ReactComponent as Message } from "../../../Resources/Palms/message.svg";

import { ComplexLabel } from "../../components/ComplexLabel/ComplexLabel";


import Inputfield from "../../components/Inputfield/Inputfield";
import Button, { ButtonShape, ButtonColor, ButtonType } from "../button/Button";

import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from '../container/Container';
const error = () => toast.error('Proszę wprowadzić informacje kontaktowe!', {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
});

const success = () => toast.success('Wiadomość została dostarczona!', {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
});

export function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            from_name: name,
            from_email: email,
            message: message,
        };

        emailjs
            .send('service_kheetrw', 'template_xw4jik6', formData, 'wbky4GAeciMCv6Q06')
            .then(
                (result) => {
                    setName('');
                    setEmail('');
                    setMessage('');
                },
                (error) => {
                    error();
                }
            );
        success();
        // formRef.current.reset();
    };


    return (
        <Container>

            <div className="contact-section" id="contact_section">


                <div id='contact-form' className="contact-form">
                    <form onSubmit={handleSubmit} ref={formRef}>
                        <h2 className='contact-form__title'>Formularz kontaktowy</h2>
                        <span className='contact-form__subtitle'>Jeśli nasz zespół może jakoś pomóc koniecznie skontaktuj się z nami za pomocą tego formularza lub zadzwoń!</span>

                        <div className='contact-form__inputfields'>
                            <Inputfield label={"Imię"}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                name="name"
                                type={"text"}
                                required />
                            <Inputfield label={"Email kontaktowy"}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                name="email"
                                type="email"
                                required />
                            <Inputfield label={"W czym możemy pomóc?"}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                isTextArea
                                name="message"
                                required />
                        </div>

                        <Button
                            submit
                            type={ButtonType.Filled}
                            color={ButtonColor.Default}
                            append={<box-icon name='right-arrow-alt' ></box-icon>}
                            text={"Wyślij!"}
                        />
                    </form>
                </div>

            </div>

        </Container>
    );
}
