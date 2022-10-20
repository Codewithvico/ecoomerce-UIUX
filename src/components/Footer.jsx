import { Facebook, Instagram, MailOutline, Phone, Room, Twitter, WhatsApp } from "@material-ui/icons"
import styled from "styled-components"
import { mobile, tablet } from "../responsive"

 
const Container = styled.div`
    
   
`

const Wrapper = styled.div`
    height: 40%;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 2rem 4rem;
    background: rgb(2,0,36);
    background-size: cover;

    ${tablet({flexDirection: 'column'})}
    ${mobile({flexDirection: 'column'})}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: rgb(2,0,36);
   
`

const Logo = styled.h1`

`

const Desc = styled.p`
    margin 20px 0px;
    letter-spacing: 1px;

    ${tablet({fontSize: '12px'})}
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

    ${tablet({width: '35px', height: '35px'})}
    ${mobile({width: '30px', height: '30px'})}
    
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    
    ${tablet({ flexDirection: 'column' })}
    ${mobile({ flexDirection: 'column' })}
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;

    
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%;

    ${tablet({ width: '45%' })}
    ${mobile({ width: '40%' })}
`


const Footer = () => {
  return (
    <Container>
       <Wrapper>
       <Left> 
            <Logo>MJ'S WIG.</Logo>
            <Desc> Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique a, 
                dignissimos consectetur at qui delectus culpa placeat vitae voluptatibus ex dolore 
                quod architecto facere nostrum molestiae exercitationem pariatur impedit! Sed! 
            </Desc>
            <SocialContainer> 
                <SocialIcon color="3B5999"> 
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="E4405F"> 
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="55ACEE"> 
                    <Twitter />
                </SocialIcon>
                <SocialIcon color="00803d"> 
                    <WhatsApp />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title> Useful Links </Title>
            <List>
                <ListItem>Home</ListItem>             
                <ListItem>About Us</ListItem>             
                <ListItem>Cart</ListItem>             
                <ListItem> Products</ListItem>             
                <ListItem>My Account</ListItem>             
                <ListItem>Order Tracking</ListItem>             
                <ListItem>Terms & Conditions</ListItem>             
                <ListItem>Policy & Privacy</ListItem>             
                <ListItem>Login</ListItem>             
                <ListItem>Register</ListItem>              
            </List>    
        </Center>
        <Right> 
            <Title> Contact Us </Title> 
            <ContactItem> <Room style={{marginRight: "10px"}} /> 200 Deluxe Path , South Europe 983320 </ContactItem>
            <ContactItem> <Phone style={{marginRight: "10px"}} /> +49 177 7702021 </ContactItem>
            <ContactItem> <MailOutline style={{marginRight: "10px"}} /> contact@maryjaneswig.com </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
       </Wrapper>
    </Container>
  )
}

export default Footer