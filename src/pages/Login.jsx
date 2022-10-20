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
     url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") 
     center center;
     background-position: center center;
     background-repeat: no-repeat;
     background-size: cover;   
     display: flex;
     align-items: center;
     justify-content: center;
`

const Wrapper = styled.div`
    width: 25%;  
    padding: 20px;
    background-color: var(--white);

    ${mobile({width: '85%'})}
    ${tablet({width: '70%'})}
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
    flex-direction: column;    
`

const Input = styled.input`
      flex: 1;
      min-width: 40%;
      margin: 10px 0px;
      padding: 10px;
      text-transform: Capitalize;
`

const Button = styled.button`
      width: 40%;
      border: none;
      border-radius: 20px;
      padding: 10px 20px;
      text-transform: uppercase;
      background-color: var(--blue);
      color: var(--white);
      font-weight: 300;
      cursor: pointer;
      margin-bottom: 10px;


      &:hover {
        background-color: var(--black);
      }
`

 const Link = styled.a`
      color: var(--ash-black) !important;
      margin: 5px 0px;
      text-decoration: underline !important;
      cursor: pointer;
 `


const Login = () => {
  return (
    <MainContainer>
    <Navbar />  
    <Container>
    <Wrapper>
      <Title> Sign In</Title>
      <Form>
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <Button>LOGIN</Button>
        <Link src="">Do not remember the password?</Link>
        <Link src=""> Create a new account</Link>
      </Form>
    </Wrapper>
    </Container>
    <VIframe />
    <Footer />
    <FooterCredit />
    </MainContainer>
  )
}

export default Login