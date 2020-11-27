import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon></CloseIcon>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='sobre'>Sobre Nós</SidebarLink>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLink to='servicos'>Serviços</SidebarLink>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLink to='about'>Nossa Estrutura</SidebarLink>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLink to='about'>Diferenciais</SidebarLink>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLink to='about'>Contato</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
