import { useState } from "react";
import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import FooterCredit from "../components/FooterCredit";
import Navbar from "../components/Navbar";
import VIframe from '../components/VIframe';
import Newsletter from "../components/Newsletter";
import { TermsInfo } from "../data";
import { mobile, tablet } from "../responsive";

const Container = styled.div``

const BodyContainer = styled.div`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    position: relative;
    padding: 2rem 0;
`

const BodyTitle = styled.h1`
    padding: 2rem;

    ${mobile({ fontSize: '24px' })}
    ${tablet({ fontSize: '30px' })}
`

const Wrapper = styled.div`
    padding: 2rem 26rem;

    ${mobile({padding: 0})}
    ${tablet({padding: 0})}
`

const Wrap = styled.div`
    border-bottom: 1px solid var(--white);
`

const BodyListTitle = styled.ul`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    padding: 1rem 0rem;
    display: flex;
    justify-content: space-between;
    cursor: pointer;

    ${tablet({ padding:  '30px 20px'})}
    
`


const BodyListDesc = styled.li`
    display: ${props=> props.isClicked ? 'block' : 'none'};
    margin-bottom: 1.6em;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    letter-spacing: 1px;
    line-height: 2em;
    font-weight: 300;
    list-style-type: none;

    ${mobile({ paddingLeft: '50px', paddingBottom: 0 })}
    ${tablet({ paddingLeft: '150px', paddingRight: '150px' })}
`

const TermsOfServices = () => {

    const [isClicked, setIsClicked] = useState(false)

    const isClosed = () => {
        setIsClicked(!isClicked)
    }

  return (
    <Container>
        <Announcement />
        <Navbar />
        <BodyContainer>
            <BodyTitle> Terms of service </BodyTitle>
            {TermsInfo.map((item) => (
         <Wrapper>
            <Wrap onClick={isClosed} key={item.key}> 
           <BodyListTitle> {item.title} </BodyListTitle>
           <BodyListDesc isClicked={isClicked} isClosed={isClosed}> {item.desc} </BodyListDesc>
         </Wrap>
         </Wrapper>
         ))}
        </BodyContainer>
        <VIframe />
        <Newsletter />    
        <Footer />
        <FooterCredit />
    </Container>
  )
}

export default TermsOfServices