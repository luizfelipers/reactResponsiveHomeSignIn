import React, {useState} from 'react'
import {HeroContainer, HeroBackground, VideoBackground, HeroContent, HeroH1, HeroP, HeroButtonWrapper, ArrowForward, ArrowRight} from './HeroElements'
import Video from '../../videos/video.mp4';
import {Button} from '../Buttons/ButtonElement';

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }


    return (
       <HeroContainer>
           <HeroBackground>
               <VideoBackground autoPlay loop muted src={Video} type='video/mp4'>
             </VideoBackground>
           </HeroBackground>

        <HeroContent>
            <HeroH1>
                A forma mais fácil de viajar
            </HeroH1>
            <HeroP>
                Descubra mais!
            </HeroP>
            <HeroButtonWrapper>
                <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}
                primary='true' dark='true'
                >
                    Descubra mais! {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </HeroButtonWrapper>
        </HeroContent>

       </HeroContainer>
    )
}

export default HeroSection
