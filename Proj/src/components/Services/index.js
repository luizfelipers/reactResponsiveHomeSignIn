import React from 'react'
import Icon1 from './svg-1.svg';
import Icon2 from './svg-1.svg';
import Icon3 from './svg-1.svg';


import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'

const Services = () => {
    return (
        
        <ServicesContainer id='servicos'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}></ServicesIcon>
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help to reduce your fees and increase your overall revenue</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}></ServicesIcon>
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>We help to reduce your fees and increase your overall revenue</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}></ServicesIcon>
                    <ServicesH2>Instant Access</ServicesH2>
                    <ServicesP>We help to reduce your fees and increase your overall revenue</ServicesP>
                </ServicesCard>
                
            </ServicesWrapper>

        </ServicesContainer>
    )
}


export default Services