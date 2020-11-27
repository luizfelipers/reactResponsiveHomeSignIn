import React, {useState, useEffect} from 'react'
import {Nav,NavbarContainer,NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll';

const Navbar = ({toggle}) => {

const [scrollNav, setScrollNav] = useState(false)

const changeNav = () => {
    if(window.scrollY > 100){
        setScrollNav(true)
    } else{
        setScrollNav(false)
    }
}

useEffect(() => {
    window.addEventListener('scroll', changeNav)
}, [])


const toggleHome = () => {
    scroll.scrollToTop()
}

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        Tieteense
                    </NavLogo>

                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to='sobre' 
                            smooth={true} duration={500} spy={true} exact='true' offset={80}
                            >Sobre</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='servicos'
                            smooth={true} duration={500} spy={true} exact='true' offset={80}
                            >Serviços</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='estrutura'
                            smooth={true} duration={500} spy={true} exact='true' offset={80}
                            >Nossa Estrutura</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contato'
                            smooth={true} duration={500} spy={true} exact='true' offset={80}
                            >Diferenciais</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='about'
                            smooth={true} duration={500} spy={true} exact='true' offset={80}
                            >Contato</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>




                </NavbarContainer>
            </Nav>

        </>
    );
}

export default Navbar;
