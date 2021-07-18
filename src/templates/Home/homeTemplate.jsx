import React from 'react';
import {
    HeroTemplateWrapper,
} from './homeTemplate.style';

class HomeTemplate extends React.Component {
    render() {
        return (
            <HeroTemplateWrapper className="container mx-auto">
                test hero wrapper
            </HeroTemplateWrapper>
        )
    }
}

export default HomeTemplate;