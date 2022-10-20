import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import FooterCredit from "../components/FooterCredit"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Testimonial from "../components/Testimonial"
import VIframe from "../components/VIframe"
import { AboutInfo } from "../data"
import { mobile, tablet } from "../responsive"

const Container = styled.div`
    background-color: var(--white);
`

const BodyContainer = styled.div`
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    margin-bottom: 5%;
    padding: 2rem 4rem;

    ${tablet({flexDirection: "column",justifyContent: "center"})}
    ${mobile({flexDirection: "column",justifyContent: "center"})}

`

const Wrapper = styled.div`
    background-color: var(--white);
    color: var(--black);
`

const Wrap = styled.div`
    flex: 1;
    padding: 2rem 4rem;
    position: relative;

    ${tablet({padding: "1rem 2rem"})}
    ${mobile({padding: 0, opacity: 0.8})}
  
`

const Title = styled.h1`
    padding: 2rem 0;

    ${tablet({padding: 0 })}
    ${mobile({padding: 0, paddingTop: '2rem' })}
`

const SubTitle = styled.span`
    font-size: 20px;
    padding: 1rem 0;
    font-weight: 500;
    color: var(--ash-black);

    ${tablet({padding: "0"})}
    ${mobile({ padding: "0"})}
`

const Desc = styled.p`
    display: inherit;
    position: relative;
    letter-spacing: 1px;
    padding: 2rem 0;

    ${tablet({padding: "1rem 0"})}
`


const ImgWrap = styled.div`
    flex: 1;
    padding: 2rem 4rem;
`

const Image = styled.img`
    border: 5px solid var(--teal);
    border-style: dashed;
    border-radius: 50%;

    ${tablet({width: '500px'})}
    ${mobile({width: '200px'})}
`


const AboutUs = () => {
  return (
    <> 
    <Container>
        <Announcement />
        <Navbar />
          <BodyContainer>
          <Wrapper>
        {AboutInfo.map((item) => ( 
            <Wrap>  
            <Title> {item.title}</Title> 
            <SubTitle> {item.subtitle} </SubTitle>
            <Desc> {item.description} </Desc>
            </Wrap>
        ))}
        </Wrapper>
        <ImgWrap> 
        {AboutInfo.map((item) => ( 
            <Image src={item.img} alt="about-image" />
            ))}  
        </ImgWrap>
          </BodyContainer>
          <Testimonial />
          <VIframe />
        <Newsletter />    
        <Footer />
        <FooterCredit />
    </Container>
    </>
  )
}

export default AboutUs