import React from 'react';
import { Contact } from '../components';

export function ContactContainer({ children }) {
    return (
        <Contact id="contact">
            <Contact.Frame>
                <Contact.Title>Contact Me</Contact.Title>
            </Contact.Frame>
        </Contact>
    );
}
