import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { mobile, tablet } from "../responsive"


const Container = styled.div`
    
`

const Wrapper = styled.div`
    padding: 20px;
    background-color: #FFFFFF;
    color: var(--ash-black);
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
    text-transform: uppercase;

    ${mobile({fontSize: '20px'})}
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

    ${mobile({flexDirection: 'column' })}
    ${tablet({flexDirection: 'column' })}
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"} !important;
    border-top-right-radius: ${(props) => props.type === "filled" ? "20px" : "none"};
    border-top-left-radius: ${(props) => props.type === "filled" ? "none" : "20px"};
    background-color: ${(props )=> props.type === "filled" ? "black" : "white"} !important;
    color: ${(props) => props.type === "filled" && "white"} !important;

    &:hover {
        background-color: ${(props )=> props.type === "filled" ? "#eee" : "black"} !important;
        color: ${(props )=> props.type === "filled" ? "#000" : "#fff"} !important;
        transition: all 1s ease-in-out;
    }

    ${mobile({margin: '15px'})}
    ${tablet({margin: '15px'})}
`


const TopTexts = styled.div`
    font-family: 'Roboto', sans-serif;

`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`


const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2rem 4rem;


    ${mobile({flexDirection: 'column', textAlign: 'center'})}
    ${tablet({flexDirection: 'column', textAlign: 'center'})}
`

const Info = styled.div`
    flex: 3;
`

const Products = styled.div`
    display: flex;
    justify-content: space-between;


    ${mobile({flexDirection: 'column', textAlign: 'center', borderRadius: '25px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;', padding: '10px', marginBottom: '25px'})}
    ${tablet({marginBottom: '35px'})}
`

const ProductDetails = styled.div`
    flex: 2;
    display: flex;

    ${mobile({flexDirection: 'column', textAlign: 'center'})}
`

const ProductImage = styled.img`
    width: 200px;
`

const Details = styled.div`  
    display: flex;
    flex-direction: column;
    justify-conent: space-around;
    font-size: 20px;
    font-family: Roboto;

    ${mobile({ fontSize: '14px', position: 'relative', top: '10px'})}
`

const ProductName = styled.span`
    padding-bottom: 20px;

    ${mobile({ paddingBottom: '5px' })}
`

const ProductId = styled.span`
    padding-bottom: 20px;

    ${mobile({ paddingBottom: '5px' })}
`

const ProductColor = styled.div`
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    padding-bottom: 20px;

    ${mobile({ paddingBottom: '5px', textAlign: 'center', alignContent: 'center', left: '42%'})}
`

const ProductSize = styled.span`
    padding-top: 20px;
    
    ${mobile({ paddingTop: '5px' })}
`

const PriceDetails = styled.span`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`

const Hr = styled.hr`
    background: #eee;
    border: none;
    height: 1px;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
    text-transform: capitalize;

    ${mobile({fontSize: '30px', fontWeight: 300})}
`
 
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};

`

const SummaryItemText = styled.span`
    text-transform: capitalize;
`

const SummaryItemPrice = styled.span`

`

const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: var(--ash-black);
    color: var(--white);
    border: none;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        background-color: var(--lightgray);
        color: var(--black);
        transition: all 1s ease-in-out;
    }
`


const Cart = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title> your bag </Title>
        <Top>
         <TopButton>Continue Shopping</TopButton>
         <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>your wishlist (0)</TopText>
         </TopTexts>
         <TopButton type="filled">Checkout Now</TopButton>
        </Top>   
        <Bottom>

            <Info>
                <Products>
                    <ProductDetails> 
                    <ProductImage src="http://maryjaneswig.com/images/mjwig1.png" alt="no product-image" />
                        <Details>
                            <ProductName><b>Product: </b>Maryjanes Wig</ProductName>
                            <ProductId> <b>ID: </b> 988437726262 </ProductId>
                            <ProductColor color="#5c2a2d" />
                            <ProductSize> <b>Size: </b> 37.8</ProductSize>
                        </Details>
                    </ProductDetails>
                    <PriceDetails> 
                        <ProductAmountContainer>
                            <Add />
                                <ProductAmount>2</ProductAmount>
                            <Remove />
                        </ProductAmountContainer>
                        <ProductPrice>$ 830</ProductPrice>
                    </PriceDetails>
                </Products>
                <Hr />
                <Products>
                    <ProductDetails> 
                    <ProductImage src="http://maryjaneswig.com/images/mjptoductsdisplay.png" alt="no product-image" />
                        <Details>
                            <ProductName><b>Product: </b>Ajebor Wig</ProductName>
                            <ProductId> <b>ID: </b> 988437726262 </ProductId>
                            <ProductColor color="black" />
                            <ProductSize> <b>Size: </b> M </ProductSize>
                        </Details>
                    </ProductDetails>
                    <PriceDetails> 
                        <ProductAmountContainer>
                            <Add />
                                <ProductAmount>2</ProductAmount>
                            <Remove />
                        </ProductAmountContainer>
                        <ProductPrice>$ 650</ProductPrice>
                    </PriceDetails>
                </Products>
            </Info>    
            <Summary>
                <SummaryTitle>order summary</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>subtotal</SummaryItemText>
                    <SummaryItemPrice>$ 650</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>estimated shipping</SummaryItemText>
                    <SummaryItemPrice>$ 5.90 </SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>shipping discount</SummaryItemText>
                    <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryItemText>total</SummaryItemText>
                    <SummaryItemPrice>$ 650</SummaryItemPrice>
                </SummaryItem>
                <SummaryButton>Checkout now</SummaryButton>
            </Summary>    
        </Bottom>   
     </Wrapper> 
      <Footer />
    </Container>
  )
}

export default Cart