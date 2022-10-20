import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import { motion } from 'framer-motion/dist/framer-motion'
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import RelatedItems from "../components/RelatedItems"
import FooterCredit from "../components/FooterCredit"
import { mobile, tablet } from "../responsive"

const Container = styled.div`
    background:  #fff;
`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;

    &::after {
        
        position:absolute;
        left: 50%;
        bottom:0;
        height: 85px;
        content: "";
        display: block;
        width: 1px;
        background-color: #eee;
        z-index: 2;
        opacity: 0.7;
    }
    
    ${mobile({flexDirection: 'column'})}

`

const ImgContainer = styled.div`
    flex: 2;
`

const Image = styled.img`
    width: 90%;
    height: 90vh;
    object-fit: cover;
    border-radius: 25px;

    ${mobile({width: '100%', height: '60%'})}
    ${tablet({width: '80%', height: '50%'})}
   
`

const InfoContainer = styled.div`
    flex: 2;
    width: 70%;

    ${mobile({width: '100%'})}
    ${tablet({width: '100%'})}

`

const Title = styled.h1`
    font-weight: 200;
    color: var(--ash-black);

    ${mobile({paddingTop: '10px'})}
    ${tablet({padding: '10px'})}
`

const Desc = styled.p`
    margin: 20px 0px;
    color: var(--ash-black);
    letter-spacing: 1px;
    width: 80%;

    ${mobile({width: '100%'})}
    ${tablet({width: '100%'})}
`

const Price = styled.span`
    color: var(--ash-black);
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;

    ${mobile({flexDirection: 'column'})}

    ${tablet({flexDirection: 'column'})}
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    color: var(--ash-black);
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;

    ${mobile({margin: '10px'})}

    ${tablet({margin: '10px'})}
`

const FilterSizeOption = styled.option`
   
`

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    cursor: pointer;

    ${mobile({ flexDirection: 'column' })}

`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Hr = styled.hr`
    background: #eee;
    border: none;
    height: 1px;

    
`

const Amount = styled.span`
    color: #1a1a1a;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
    cursor: pointer;
    padding: 15px;
    border: none;
    background-color: var(--black);
    color: var(--white);
    font-weight: 500;
    border-radius: 5px;

    &:hover {
        background-color: var(--white);
        color: var(--black);
        transition: all 1s ease-in-out;
    }

    ${mobile({ width: '100%', margin: '15px'})}

    ${tablet({ width: '100%', margin: '15px' })}
`

const RelatedItemsContainer = styled.div`
    ${mobile({ display: 'none' })}

    ${tablet({ display: 'none' })}
`


const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper> 
            <ImgContainer>
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1}}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5, type: 'tween'}}
            > 
                <Image src="http://maryjaneswig.com/images/product2.JPG" alt="product image" />
            
            </motion.div>    
            </ImgContainer>
            <InfoContainer> 
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1}}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5, type: 'tween'}}
            > 
                <Title> Denim Jumpsuit </Title>
                <Desc> 
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis 
                    nisi sequi quibusdam laboriosam saepe perspiciatis sapiente adipisci sit 
                    natus, neque in? sequi quibusdam laboriosam saepe perspiciatis sapiente
                     Obcaecati in quasi sint quis repellendus omnis delectus 
                    reiciendis. 
                </Desc>
                <Price>$ 20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="var(--black)" />
                        <FilterColor color="var(--darkblue)" />
                        <FilterColor color="var(--orange)" />
                        <FilterColor color="var(--gold);" />
                    </Filter>
                    <Filter> 
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>

                    <AmountContainer>
                        <Remove style={{color: 'var(--black)'}} />
                        <Amount>1</Amount>
                        <Add style={{color: 'var(--black)'}} />
                    </AmountContainer>
                    <Button>PLACE ORDER</Button>
                 
                </AddContainer>
                </motion.div>
                <br />
                <br />
                <Hr /> 
                <br />
                <RelatedItemsContainer>
                <RelatedItems />
                </RelatedItemsContainer>
            </InfoContainer>
           
        </Wrapper>
        <Newsletter />
        <Footer />
        <FooterCredit />
    </Container>
  )
}

export default Product