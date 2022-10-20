import styled from "styled-components"


const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 100%;
    position: relative;
    padding: 0 1rem;
    cursor: pointer;
    margin-bottom: 50px;
    
`
 
const Image = styled.img`
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 5%;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));

    
`

const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    opacity: 0;

    &:hover{
        opacity: 1;
        background-color: #000000;
        border-radius: 5%;
    }

`

const Title = styled.h1`
    color: var(--white);
    margin-bottom: 20px;
    font-size: 22px;
`

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: var(--white);
    color: gray;
    cursor: pointer;
    font-weight: 600;

    &:hover {
        background-color: var(--black);
        transition: all 0.5s ease;
        color: var(--white);
    }
`

const CategoryItem = ({item}) => {
  return (
    <Container> 
        <Image src={item.img} alt={item.title}/>
        <Info>
            <Title>{item.title}</Title>
            <Button> SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem