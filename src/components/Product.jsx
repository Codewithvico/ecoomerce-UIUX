import { FavoriteBorderOutlined, PieChart, Star } from '@material-ui/icons'
import styled from "styled-components"
import { popularProducts } from '../data'
import Testimonial from './Testimonial'
import { motion } from 'framer-motion/dist/framer-motion'
import { mobile } from '../responsive'

const Container  = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    background-color: #000;
    box-sizing: border-box;

`

const WrapRow  = styled.div`
    position:relative;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-bottom: 80px;

    &::before {
        
        position:absolute;
        left: 50%;
        top:0;
        height: 95px;
        content: "";
        display: block;
        width:3px;
        background-color: var(--ash-black);
        z-index: 2;
    }

`

const WrapRowTop  = styled.div`
    position: relative;
`

const ProductMainTitle  = styled.h2`      
    margin-top: 120px;
    margin-bottom: 50px;
    color: var(--white);
    font-family: 'Montserrat', sans-serif;
    font-size: 38px;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: inherit;
    text-align: center;

    ${mobile({fontSize: 30})}
`
const ProductFeaturedLinkContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 30px;
`

const ProductFeaturedLink  = styled.a`
    padding: 0 15px;
    font-size: 16px;
    color: #bbb;
    
    &:nth-child(1) {
        border-right: 1px solid var(--white);
    }
    &:nth-child(2) {
        border-right: 1px solid var(--white);
    }

`

const WrapRowBottom  = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    padding: 10px 50px;
`


const ProductGrid = styled.div`
    padding: 10px 10px;
    transition: all 0.5s;
    color: #fff;
    text-align: center;
    transition: all ease-in-out 0.35s;
    max-width: 345px;
    height: auto;
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
`

const ProductImageContainer = styled.div`
    position: relative;
    overflow: hidden;
   
`

const ProductImageLink  = styled.a`
    display: block;
`

const ProductImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 5px;
`

const ProductContent = styled.div`
    position: relative;
`

const ProductContentTitle = styled.h3`
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 400;
    line-height: 2px;
    color: #f4f4f4;
    position: inherit;
    top: 20px;

`

const ProductPrice = styled.span`
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    color: var(--lightgray);
    
   
`

const ProductRating = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`

const ProductRatingList = styled.li`
    color: #FFB14B;
    font-size: 13px;
    display: inline-block;

`


const ActionButton  = styled.div`
    display: inline-block;
    margin-top: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`

const ActionCartBtn = styled.button`
    padding: 6px 20px;
    border-radius:5px;
    border: 1px solid #ccc;
    font-weight: 500;
    margin: 0 4px;
    outline: none;
    cursor: pointer;

    &:hover {
        background-color: var(--pink);
        color: var(--white);
        box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
        transition: all 1s ease;
        border: none;
        outline: none;

    }
`

const ActionBtnIcons = styled.span`
    padding: 6px 20px;
    border-radius:5px;
    border: 1px solid #ccc;
    margin: 0 4px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
    cursor: pointer;
`


const Product = () => {
    
  return (
  
    <Container>
    <WrapRow>
        <WrapRowTop>
            <ProductMainTitle>OUR PRODUCTS</ProductMainTitle>
        </WrapRowTop>
       <ProductFeaturedLinkContainer>
       <ProductFeaturedLink  href="#">BEST SELLER</ProductFeaturedLink>  <ProductFeaturedLink href="#">NEW ARRIVAL</ProductFeaturedLink>  <ProductFeaturedLink href="#">MOST WANTED</ProductFeaturedLink> 
       </ProductFeaturedLinkContainer>
        <WrapRowBottom>
         
           {popularProducts.map((item) => ( 
            <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1}}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5, type: 'tween'}}
     >  
            <ProductGrid key={item.id}>
                <ProductImageContainer>
                    <ProductImageLink href="#">
                        <ProductImage src={item.img} alt="no-image" />
                    </ProductImageLink>      
                </ProductImageContainer>
                <ProductContent>
                    <ProductContentTitle> {item.name} </ProductContentTitle>
                    <br />
                     <ProductPrice> {item.price} </ProductPrice>
                    <ProductRating>
                       <ProductRatingList> <Star style={{color: 'white'}} /> </ProductRatingList> 
                       <ProductRatingList> <Star style={{color: 'gold'}} /> </ProductRatingList> 
                       <ProductRatingList> <Star style={{color: 'gold'}} /> </ProductRatingList>
                       <ProductRatingList><Star style={{color: 'gold'}} /></ProductRatingList>
                       <ProductRatingList><Star style={{color: 'gold'}} disabled /></ProductRatingList>
                   </ProductRating>
                </ProductContent>

                <ActionButton>
                    <ActionCartBtn>BUY</ActionCartBtn>
                    <ActionBtnIcons> 
                        <FavoriteBorderOutlined style={{color: 'white'}} />
                    </ActionBtnIcons>
                    <ActionBtnIcons> 
                        <PieChart style={{color: 'white'}}  />
                    </ActionBtnIcons>
                </ActionButton>
                </ProductGrid>
                </motion.div> 
             ))}
               </WrapRowBottom> 
            </WrapRow>
            <Testimonial />
        </Container>      
  )
}

export default Product