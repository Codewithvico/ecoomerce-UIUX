import styled from "styled-components"
import { motion } from 'framer-motion/dist/framer-motion'
import { useState } from "react"
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { TestimonialsData } from "../data"
import { mobile, tablet } from "../responsive"


const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
    border-top: 1px solid var(--white);
    border-bottom: 1px solid var(--white);
    background-color: #070729;

    &::before {
        
        position:absolute;
        left: 50%;
        top:0;
        height: 85px;
        content: "";
        display: block;
        width:3px;
        background-color: var(--white);
        opacity: 0.7;
        z-index: 2;
    }
    &::after {
        
        position:absolute;
        left: 50%;
        bottom:0;
        height: 85px;
        content: "";
        display: block;
        width:3px;
        background-color: var(--white);
        opacity: 0.7;
        z-index: 2;
    }
    
`

const TestimonialTitleContainer = styled.div`
    background-color: #070729;
    position: relative;
    left: 820px;
    top: 45px;
    height: auto;

`

const TestimonialTitle = styled.h1`
    text-align: center;
    display: block;
    width: 100%;
`
 
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: var(--white);
    color: var(--ash-black);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;

    z-index: 2;

    &:hover {
        background-color: var(--black);
        color: var(--white);
    }

    ${tablet({width: '35px', height: '35px'})}
    ${mobile({width: '30px', height: '30px'})}
`



const Wrapper = styled.div`
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=>props.slideIndex * -100}vw);
    background-color: #05052b;
    opacity: 0.9;
    align-items: center;
    justify-content: center;

`

const Slide = styled.div`
    width: 100vw;
    height: 90vh;

`

const TestimonialsInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    top: 25%;

    ${mobile({top: "20px" })}
`

const TestimonialComment = styled.p`
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 30px;
    letter-spacing: 1px;
    text-align: center;
    width: 50%;

    ${mobile({width: "60%", fontSize: "17px"})}
`

const TestimonialProfile = styled.div`
    padding-top: 30px;

`

const TestimonialImage = styled.img`
    border-radius: 50%;
    height: 175px;
    width: 175px;
    object-fit: cover;

    ${mobile({width: '100px', height: '100px'})}
    ${tablet({width: '175px', height: '175px'})}

`

const TestimonialProfileDetails = styled.div`
    padding-top: 30px;
`

const TestimonialName = styled.h3`
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 30px;
    letter-spacing: 1px;
    text-align: center;

    ${mobile({display: 'none'})}
`

const TestimonialPosition = styled.p`
    text-align: center;
    font-size: 20px;

    ${mobile({display: 'none'})}
`




const Testimonial = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {

        if (direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    };

  return (

    <Container> 
          
           <motion.div
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1.5, delay: 0.2 }}
            > 
            
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined />
        </Arrow>
        <TestimonialTitleContainer>
            <TestimonialTitle> Testimonials </TestimonialTitle>
        </TestimonialTitleContainer>
        <Wrapper slideIndex={slideIndex}>
          {TestimonialsData.map((item) => ( 
          <Slide bg={item.bg} key={item.id}>  
            <TestimonialsInfo> 
                <TestimonialComment> {item.text} </TestimonialComment>  
                <TestimonialProfile> 
                    <TestimonialImage src={item.photo} alt="testimonial image" Title="testimonial image"/>
                    <TestimonialProfileDetails>
                    <TestimonialName> {item.name} </TestimonialName>
                    <TestimonialPosition> {item.position} </TestimonialPosition>
                    </TestimonialProfileDetails> 
                </TestimonialProfile>
            </TestimonialsInfo>     
           </Slide> 
          ))}  
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined />
        </Arrow>
        </motion.div>
        </Container>
  )
}

export default Testimonial