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
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const formRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            error();
            return;
        }


        const emailData = {
            ...formData,

        };

        emailjs.send('service_8iw9vjs', 'template_rlv5bo1', emailData, 'ZaVhnKcgbVGzajia4')
            .then((result) => {

                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setFormData({
            name: '',
            email: '',
            message: '',
        });
        success();
        formRef.current.reset();
    };



    return (
        <Container>

            <div className="contact-section" id="contact_section">


                <div id='contact-form' className="contact-form">
                    <form onSubmit={handleSubmit} ref={formRef}>
                        <h2 className='contact-form__title'>Formularz kontaktowy</h2>
                        <span className='contact-form__subtitle'>Jeśli nasz zespół może jakoś pomóc koniecznie skontaktuj się z nami za pomocą tego formularza lub zadzwoń!</span>

                        <div className='contact-form__inputfields'>
                            <Inputfield label={"Imię"} value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                name="name"
                                type={"text"} />
                            <Inputfield label={"Email kontaktowy"} value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                name="email"
                                type="email" />
                            <Inputfield label={"W czym możemy pomóc?"} value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                isTextArea
                                name="message" />
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
