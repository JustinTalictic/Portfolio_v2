import React, { useState, useContext } from 'react';
import { Contact } from '../components';
import { FirebaseContext } from '../context/firebase';

export function ContactContainer({ children }) {
    const [name, setName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [message, setMessage] = useState('');

    const isInvalid = message === '' || emailAddress === '' || name === '';

    const handleEmail = event => {
        event.preventDefault();
        console.log(123);
    };

    return (
        <Contact id="contact">
            <Contact.Title>Contact Me</Contact.Title>

            <Contact.Frame onSubmit={handleEmail} method="POST">
                <Contact.Input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                />
                <Contact.Input
                    type="text"
                    placeholder="Email address"
                    value={emailAddress}
                    onChange={({ target }) => setEmailAddress(target.value)}
                />
                <Contact.Textarea
                    type="text"
                    rows="4"
                    cols="30"
                    value={message}
                    placeholder="Message"
                    onChange={({ target }) => setMessage(target.value)}
                />
                <Contact.Submit disabled={isInvalid} type="submit">
                    Send
                </Contact.Submit>
            </Contact.Frame>
            <Contact.Picture>
                <img src="./images/icons/contact.svg" alt="contact" />
            </Contact.Picture>
        </Contact>
    );
}
