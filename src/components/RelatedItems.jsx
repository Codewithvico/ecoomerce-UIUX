import styled from "styled-components"
import { RelatedProduct, RRelatedInfo } from "../data"
import { motion } from 'framer-motion/dist/framer-motion'
import RelatedItem from "./RelatedItem"


const MainContainer = styled.div`
  display: grid;
  place-items: center;
  background-color: #FFF;
  padding: 0 10px;
`

const Container = styled.div`
    height: 100%; 
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border-radius: 5px;
`

const Wrapper = styled.div`
    position: relative;
   
`


const Title = styled.h3`
    color: teal;
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    font-weight: 300;
    display: grid;
    place-items: center;
`

const Desc = styled.p`
    color: var(--black);
    font-size: 14px;
    font-weight: 300;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 20px;
    letter-spacing: 1px;
    padding: 5px;
`


const RelatedItems = () => {
  return (
    <> 
    <MainContainer> 
     {RRelatedInfo.map((item) => (
      <Wrapper key={item.id}>
        <Title> { item.title} </Title>
        <Desc> {item.subtitle}</Desc>
      </Wrapper>
      ))}
 
    <Container>
       {RelatedProduct.map((item) => (
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1}}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.5, type: 'tween'}}
 >  
            <RelatedItem item={item} key={item.id} />
         </motion.div> 
        ))} 
    </Container>
    </MainContainer>
    </>
  )
}

export default RelatedItems