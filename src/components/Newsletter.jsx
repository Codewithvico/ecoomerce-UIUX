import { Send } from '@material-ui/icons'
import styled from "styled-components"
import { newsLetters } from '../data'
import { mobile, tablet } from '../responsive'

const Container = styled.div`
    height: 30vh;
    background: rgb(2,0,36);
    border-image: linear-gradient(to right bottom, rgba(2,0,36,0.9626225490196079) 0%, rgba(40,40,56,1) 35%, rgba(211,219,221,1) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    ${tablet({display: "none"})}
    ${mobile({display: "none"})}
`

const Title = styled.h1`
    color: var(--white);
    font-size: 70px;
    margin-bottom: 20px;

    
`

const Description = styled.div`
    color: var(--white);
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;

`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: var(--white);
    display: flex;
    justify-content: space-between;
    border: 1px solid var(--lightgray);
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;

`

const Input = styled.input`
    border: none;
    outline: none;
    padding-left: 20px;
    flex: 8;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
   
`

const Button = styled.button`
    -webkit-flex: 2;
    -ms-flex: 2;
    flex: 2;
    outline: none;
    border: none;
    background-color: #f50057;
    color: var(--white);
    cursor: pointer;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
 
`

const Newsletter = () => {
  return (
    <>
        {newsLetters.map((item) => (
       <Container key={item.id}>
       <Title> {item.title} </Title> 
        <Description> {item.desc} </Description>
        <InputContainer> 
            <Input placeholder="Your email" />
            <Button> 
                <Send />
            </Button>
        </InputContainer>
       </Container>
        ))}
    </>
  )
}

export default Newsletter