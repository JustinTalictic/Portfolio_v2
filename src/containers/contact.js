import React, { useState, useContext } from 'react';
import { Contact } from '../components';
import { FirebaseContext } from '../context/firebase';

export function ContactContainer({ children }) {
    const { firebase } = useContext(FirebaseContext);
    const db = firebase.firestore();
    const docRef = db.collection('contact-emails');

    const [name, setName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const isInvalid = message === '' || emailAddress === '' || name === '';

    const handleEmail = event => {
        event.preventDefault();

        docRef
            .doc()
            .set({
                name: name,
                email: emailAddress,
                message: message,
            })
            .then(() => {
                setStatus('Email sent!');
                setName('');
                setEmailAddress('');
                setMessage('');
            })
            .catch(error => {
                setStatus(error.message);
            });
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
                    type="email"
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
                    s
                />
                <Contact.Submit disabled={isInvalid} type="submit">
                    Send
                </Contact.Submit>
                <Contact.Status>Email sent!</Contact.Status>
            </Contact.Frame>
            <Contact.Picture>
                <img src="./images/icons/contact.svg" alt="contact" />
            </Contact.Picture>
        </Contact>
    );
}
