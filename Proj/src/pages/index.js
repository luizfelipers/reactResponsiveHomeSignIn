import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Services from '../components/Services'
import Footer from '../components/Footer';

const Home = () => {

    const[isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    };


    return (
        <>
        <Navbar toggle={toggle}></Navbar>

        <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
        
        <HeroSection></HeroSection>
        <InfoSection {...homeObjOne}></InfoSection>
       <Services></Services> 
       <InfoSection {...homeObjTwo}></InfoSection>
        
        <InfoSection {...homeObjThree}></InfoSection>
        <Footer></Footer>
        </>
    )
}

export default Home
