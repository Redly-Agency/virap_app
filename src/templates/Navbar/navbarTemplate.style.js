import styled from "styled-components";

import Logo from '../../assets/svg/Logo';
import image from '../../assets/img/hero.jpg';

export const NavbarBackdropBlur = styled.div`
    backdrop-filter: blur(10px);
    width: 100%;
    position: absolute;
    height: 70px;
`;
export const NavbarTemplateWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${ image });
    background-size: 100%;
    background-position: center;
`;
export const LogoStyled = styled(Logo)`
    width: auto;
    height: 70px;
    margin: 0 0 7px 0;
    padding: 10px;
    margin-left: 50%;
    transform: translateX(-50%);
`;