import styled from "styled-components"
import { categories } from "../data"
import CategoryItem from "./CategoryItem";
import { motion } from 'framer-motion/dist/framer-motion'

const MainContainer = styled.div`
   text-align: center;
`; 

const Container = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    padding: 2rem 0rem;

    
`;

const CategoriesTitleContainer = styled.div`
    position: relative;
`;

const CategoriesTitle = styled.h1`
    margin-top: 20px;
    padding: 30px;
    text-transform: capitalize;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    color: var(--lightgray);
    text-align: left;
    margin-left: 10px;
`;


const Categories = () => {
  return  <MainContainer>
        <CategoriesTitle>our shop</CategoriesTitle>
       <Container>
       {categories.map(item => (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
             whileHover={{ scale: 1.1, opacity: 1 }}
             whileTap={{ scale: 0.9 }}
             transition={{ duration: 0.5, type: 'tween' }}
      >     
      <CategoriesTitleContainer>
      </CategoriesTitleContainer>
            <CategoryItem item={item} key={item.id} />
        </motion.div>
        ))}    
    </Container>
    </MainContainer>
  
}

export default Categories