import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import FooterCredit from "../components/FooterCredit"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Product from "../components/Product"
import { mobile } from "../responsive"

const Container = styled.div`
 
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

    ${mobile({display: 'none'})}
`

const Filter = styled.div`
    margin: 20px;
`

const FilterText =  styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`

const Option = styled.option`

`


const ProductList = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <FilterContainer>
            <Filter>
                <FilterText> Filter Products: </FilterText>
            <Select> 
               <Option disabled selected> Color</Option>
               <Option>White</Option> 
               <Option>Black</Option> 
               <Option>Red</Option> 
               <Option>Blue</Option> 
               <Option>Yellow</Option> 
               <Option>Green</Option> 
            </Select>
            <Select> 
                <Option disabled selected> Size </Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
            </Select>
            </Filter> 
            <Filter>
            <FilterText> Sort Products: </FilterText>
             <Select> 
                <Option selected>Newly Released</Option>
                <Option>Popular Products</Option>
                <Option>Featured Products</Option>
             </Select>
             </Filter> 
        </FilterContainer>
        <Product />
        <Newsletter />
        <Footer />
        <FooterCredit />
    </Container>
  )
}

export default ProductList