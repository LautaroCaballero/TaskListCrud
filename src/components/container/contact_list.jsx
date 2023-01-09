import React from 'react';
import { Contacto } from '../../models/contacto.class';
import ContactoComponent from '../pure/contacto';

const ContactListComponent = () => {
    const defaultContacto = new Contacto('Default Name', 'Default Last Name', 'Default Email', false)
    return (
        <div>
            <div>
                Your contacts:
            </div>
            <div>
                <ContactoComponent contacto={defaultContacto}/>
            </div>
            
        </div>
    );
}

export default ContactListComponent;
