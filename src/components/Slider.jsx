import styled from "styled-components"
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { motion } from 'framer-motion/dist/framer-motion'
import { useState } from "react"
import { sliderDatas } from "../data"
import { mobile, tablet } from "../responsive"


const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
    
`
 
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: transparent;
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
    opacity: 0.5;
    z-index: 2;

    &:hover {
        background-color: var(--black);
        color: var(--white);
    }
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=>props.slideIndex * -100}vw);
    opacity: 0.9;

    ${tablet({ height: '70vh'})}
    ${mobile({ height: '70vh'})}

`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), #${props=>props.bg}


`

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    background-size: cover;
    background-position: center;
    
    ${mobile({display: "none"})}
    ${tablet({display: "none"})}
`

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;

`

const Title = styled.h1`
    width: 100%;
    color: var(--teal);
    text-transform: uppercase;
    font-size: 70px;
    font-family: 'Montserrat', san-serif;
    letter-spacing: 5px;

    ${tablet({fontSize: "50px", position: "relative", bottom: '120px'})}
    ${mobile({fontSize: "30px", position: "relative", bottom: '120px'})}
`
const Desc = styled.p`
    color: var(--black);
    margin: 50px 0px;
    font-size: 26px;
    font-weight: 500;
    letter-spacing: 3px;
    text-transform: uppercase;

    ${tablet({fontSize: "24px", position: "relative", bottom: '120px'})}
    ${mobile({fontSize: "14px", position: "relative", bottom: '120px'})}
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;

    ${tablet({fontSize: "19px", position: "relative", bottom: '120px'})}
    ${mobile({fontSize: "18px", position: "relative", bottom: '120px'})}
`


const Slider = () => {
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
        <Wrapper slideIndex={slideIndex}>

          {sliderDatas.map((item) => ( 
          <Slide bg={item.bg} key={item.id}>  
            <ImgContainer>
                <Image src={item.img} alt="slider image" />
             </ImgContainer>
             <InfoContainer>
              <Title> {item.title} </Title>
              <Desc> {item.desc} </Desc>
              <Button> SHOP NOW</Button>
            </InfoContainer>
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

export default Slider