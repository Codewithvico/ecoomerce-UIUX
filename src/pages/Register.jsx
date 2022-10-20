import styled from "styled-components"
import Footer from "../components/Footer"
import FooterCredit from "../components/FooterCredit"
import Navbar from "../components/Navbar"
import VIframe from "../components/VIframe"
import { mobile, tablet } from "../responsive"


const MainContainer = styled.div``


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)  
    ),
     url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") 
     center center;
     background-position: center center;
     background-repeat: no-repeat;
     background-size: cover;  
     display: flex;
     align-items: center;
     justify-content: center;
`

const Wrapper = styled.div`
    width: 40%;  
    padding: 20px;
    background-color: var(--white);

    ${mobile({width: '85%'})}
    ${tablet({width: '75%'})}
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    color: var(--ash-black);
    text-transform: uppercase;
    text-align: center;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;

`

const Input = styled.input`
      flex: 1;
      min-width: 40%;
      margin: 20px 10px 0px 0px;
      padding: 10px;
      text-transform: Capitalize;
`

const Agreement = styled.span`
      font-size: 12px;
      margin: 20px 0px;
      color: var(--ash-black);
`

const Button = styled.button`
      width: 40%;
      border: none;
      border-radius: 20px;
      padding: 10px 20px;
      text-transform: uppercase;
      background-color: var(--dusk);
      color: var(--white);
      font-weight: 300;
      cursor: pointer;

      &:hover {
        background-color: var(--black);
      }

      ${mobile({width: '100%'})}
`

const ButtonLogin = styled.div`
    width: 40%;
    margin-left: 100px;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    text-align: center;
    text-transform: uppercase;
    background-color: var(--blue);
    color: var(--white);
    font-weight: 300;
    cursor: pointer;

    &:hover {
      background-color: var(--black);
    }

    ${mobile({display: 'none'})}

`

export const Register = () => {
  return (
    <MainContainer>
    <Navbar />  
    <Container>
      <Wrapper>
        <Title> Create an Account</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email address" />
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>

          <Button>create</Button>
          <ButtonLogin>sign in</ButtonLogin>
        </Form>
      </Wrapper>
    </Container>
    <VIframe />
    <Footer />
    <FooterCredit />
    </MainContainer>
  )
}
