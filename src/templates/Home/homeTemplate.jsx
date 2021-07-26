import React from 'react';
import {
    HeroTemplateWrapper,
    ImgImport,
} from './homeTemplate.style';

import imageImport from '../../assets/img/hero.jpg';
import HeroHeaderContact from '../../components/HeroHeaderContent/heroHeaderContent';

class HomeTemplate extends React.Component {
    render() {
        return (
            <HeroTemplateWrapper
                className="container mx-auto"
            >
                <div
                    className="grid grid-cols-1 gap-5 lg:grid-cols-2"
                >
                    <div
                        className="relative"
                    >
                        <HeroHeaderContact />
                    </div>
                    <div className="">
                        <ImgImport
                            src={ imageImport }
                            className="w-4/6"
                        />
                    </div>
                </div>
            </HeroTemplateWrapper>
        )
    }
}

export default HomeTemplate;