import React from 'react';
import {
    NavbarBackdropBlur,
    NavbarTemplateWrapper,
    LogoStyled,
} from './navbarTemplate.style';

class NavbarTemplate extends React.Component {
    render() {
        return (
            <>
                <NavbarBackdropBlur />
                <NavbarTemplateWrapper>
                    <LogoStyled />
                </NavbarTemplateWrapper>
            </>
        )
    }
}

export default NavbarTemplate;