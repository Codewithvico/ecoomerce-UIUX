import { FavoriteBorderOutlined, RemoveRedEyeOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"


const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`

const Container = styled.div`
    margin: 5px;
    min-width: 270px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: var(--white);
    position: absolute;
`

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 2;
    border-radius: 10px;

`


const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--lightgray);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover {
        background-color: var(--black);
        transform: scale(1.1);
    }
`


const RelatedItem = ({item}) => {
  return (
    <Container title={item.title}>
        <Circle />
        <Image src={item.img} />
        <Info> 
            <Icon> 
                <ShoppingCartOutlined />
            </Icon>
            <Icon> 
                <RemoveRedEyeOutlined />
            </Icon>
            <Icon> 
                <FavoriteBorderOutlined />
            </Icon>
        </Info>
    </Container>
  )
}

export default RelatedItem