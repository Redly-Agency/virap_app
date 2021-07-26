import React from 'react';
import styled from 'styled-components';
import { Home } from '../../utils/data/homeData';
import { theme } from '../../utils/theme/theme';

const HeroHeader = styled.div`
    font-size: ${ theme.fontSize.DC };
    font-family: 'Poppins-Bold';
    width: 400px;
    float: right;

    @media ${ theme.device.laptopL } {
        font-size: ${ theme.fontSize.DCC };
    }
    @media ${ theme.device.laptopL } {
        font-size: ${ theme.fontSize.DCCC };
        width: 300px;
    }
`;
const HeroHeaderRotated = styled.div`
    font-size: ${ theme.fontSize.DC };
    font-family: 'Poppins-Bold';
    width: 400px;
    position: absolute;
    margin: 0;
    padding: 0;
    right: 60px;
    bottom: 80px;
    float: right;
    transform: rotate(90deg);

    @media ${ theme.device.laptopL } {
        bottom: 0;
        font-size: ${ theme.fontSize.DCC };
    }
    @media ${ theme.device.laptopL } {
        bottom: -30px;
        left: 105px;
        font-size: ${ theme.fontSize.DCCC };
    }
`;

class HeroHeaderContent extends React.Component {
    render() {
        return (
            <>
                <HeroHeader>
                    { Home.MainHeaderContent }
                </HeroHeader>
                <HeroHeaderRotated>
                    { Home.MainHeaderContent }
                </HeroHeaderRotated>
            </>
        )
    }
}

export default HeroHeaderContent;