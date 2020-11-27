import React from 'react';
import {FooterContainer, FooterWrap,FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us </FooterLinkTitle>
                                <FooterLink to='/signin'>About Us</FooterLink>
                                <FooterLink to='/signin'>How it Works</FooterLink>
                                <FooterLink to='/signin'>Services</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Terms of Service</FooterLink>

                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us </FooterLinkTitle>
                                <FooterLink to='/signin'>Contato</FooterLink>
                                <FooterLink to='/signin'>Suporte</FooterLink>
                                <FooterLink to='/signin'>Destinos</FooterLink>
                                <FooterLink to='/signin'>Patrocínios</FooterLink>
                                
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Video </FooterLinkTitle>
                                <FooterLink to='/signin'>Submit Video</FooterLink>
                                <FooterLink to='/signin'>Ambassadors</FooterLink>
                                <FooterLink to='/signin'>Agência</FooterLink>
                                <FooterLink to='/signin'>Influenciador</FooterLink>
                               
                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Social Media </FooterLinkTitle>
                                <FooterLink to='/signin'>Instagram</FooterLink>
                                <FooterLink to='/signin'>Facebook</FooterLink>
                                <FooterLink to='/signin'>Youtube</FooterLink>
                                <FooterLink to='/signin'>Twitter</FooterLink>
                             

                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer