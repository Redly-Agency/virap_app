import React from 'react';
import styled from 'styled-components';

import ContactTemplate from '../templates/Contact/contactTemplate';

const ContactWrapper = styled.div`

`;

class Contact extends React.Component {
    render() {
        return (
            <ContactWrapper>
                <ContactTemplate />
            </ContactWrapper>
        )
    }
}

export default Contact;