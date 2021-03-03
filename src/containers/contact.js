import React, { useState, useContext } from 'react';
import { Contact, Projects } from '../components';
import { FirebaseContext } from '../context/firebase';
const nodemailer = require('nodemailer');

export function ContactContainer({ children }) {
    const { firebase } = useContext(FirebaseContext);
    const db = firebase.firestore();
    const docRef = db.collection('contact-emails');

    const [name, setName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const isInvalid = message === '' || emailAddress === '' || name === '';

    const sendEmail = async event => {
        event.preventDefault();

        const subject = 'Portfolio Contact Email';

        let testAccount = await nodemailer.createTestAccount();

        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: testAccount.user, // generated ethereal user
                pass: testAccount.pass, // generated ethereal password
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: `${name} <${emailAddress}>`, // sender address
            to: 'justin.talictic@gmail.com', // list of receivers
            subject: `${subject}`, // Subject line
            text: `${message}`, // plain text body
            html: '<b>Hello world?</b>', // html body
        });

        console.log('Message sent: %s', info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    };

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
            <Contact.Frame onSubmit={sendEmail} method="POST">
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
