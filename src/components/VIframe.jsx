import styled from "styled-components"
import { Iinfo, vIFrames } from "../data";
import { motion } from 'framer-motion/dist/framer-motion'
import { mobile, tablet } from "../responsive";


const Container = styled.div`
    height: 100%;
    background-color: var(--ash-black);
    color: var(--white);
    display: grid;
    padding: 4rem 4rem;
    justify-content: space-around;
   
`

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
   
    ${mobile({ paddingRight: '20px'})}
`

const Title = styled.h1`
    color: var(--teal);
    font-family: 'Montserrat', sans-serif;
    font-size: 50px;
    font-weight: 300;
    display: inherit;
    place-items: center;

    ${mobile({fontSize: "30px", fontWeight: "400"})}
    
`

const Desc = styled.p`
    color: var(--white);
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 200;
    -webkit-letter-spacing: 3px;
    -moz-letter-spacing: 3px;
    -ms-letter-spacing: 3px;
    letter-spacing: 3px;
    text-transform: uppercase;
    padding-top: 0;
    text-align: center;

    ${mobile({fontSize: "14px", fontWeight: "200"})}
`

const Iframe = styled.iframe`
    width: 350px;
    height: 350px;
    padding: 10px;
    border: none !important;
    outline: none !important;
    border-radius: 25px;
    margin-left: 30px;

    ${tablet({width: "260px", height: "260px"})}
    ${mobile({width: "242px", height: "250px"})}
   
`

const VIframe = () => {


  return (
    <>
    {Iinfo.map((item) => (
    <Container>
        <Title> {item.title} </Title>
        <Desc> {item.desc} </Desc>
       <Wrapper> 
       {vIFrames.map((item) => ( 
         <motion.div
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1, opacity: 0.6 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5, type: 'tween' }}
        > 
        <Iframe src={item.iframes} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
        </motion.div>
        ))} 
       </Wrapper>  
    </Container>
     ))}
    </>
  )
}

export default VIframe