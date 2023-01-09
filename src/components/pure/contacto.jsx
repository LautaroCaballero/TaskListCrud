import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const ContactoComponent = ({contacto}) => {
    return (
        <div>
            <h2>
                Nombre: {contacto.name}
            </h2>
            <h2>
                Apellido: {contacto.lastN}
            </h2>
            <h3>
                Mail: {contacto.mail}
            </h3>
            <h4>
                Estado: {contacto.state ? 'Conectado':'No conectado'}
            </h4>
        </div>
    );
};


ContactoComponent.propTypes = {
    contacto : PropTypes.instanceOf(Contacto)
};


export default ContactoComponent;
