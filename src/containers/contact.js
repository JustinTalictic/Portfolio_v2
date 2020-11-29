import React, { useState, useContext } from 'react';
import { Contact, Projects } from '../components';
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

    const handleSubmit = event => {
        event.preventDefault();

        const subject = 'Portfolio Contact Email';

        docRef
            .doc()
            .set({
                name: name,
                email: emailAddress,
                message: message,
                subject: subject,
            })
            .then(() => {
                setStatus('Email Sent!');
                setName('');
                setEmailAddress('');
                setMessage('');
                setTimeout(() => {
                    setStatus('');
                }, 5000);
            })
            .catch(error => {
                setStatus(error.message);
            });
    };

    return (
        <Contact id="contact">
            <Contact.TitleDiv>
                <Projects.Title>Contact Me</Projects.Title>
            </Contact.TitleDiv>
            <Contact.Frame onSubmit={handleSubmit} method="POST">
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
                />
                <Contact.Submit disabled={isInvalid} type="submit">
                    Submit
                </Contact.Submit>
                {status && <Contact.Status>{status}</Contact.Status>}
            </Contact.Frame>
            <Contact.Picture>
                <img src="./images/icons/contact.svg" alt="contact" />
            </Contact.Picture>
        </Contact>
    );
}
