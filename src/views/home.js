import React from 'react';
import styled from 'styled-components';

import HomeTemplate from '../templates/Home/homeTemplate';

const HomeWrapper = styled.div`

`;

class Home extends React.Component {
    render() {
        return (
            <HomeWrapper>
                <HomeTemplate />
            </HomeWrapper>
        )
    }
}

export default Home;