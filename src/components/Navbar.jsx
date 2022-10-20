import { Badge } from '@material-ui/core'
import { LanguageRounded, LocalMallOutlined, MenuOpenOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive"
import { tablet } from "../responsive"


const  Container = styled.div`
    height: 80px;
    background: rgb(2,0,36);
    border-image: linear-gradient(to right bottom, rgba(2,0,36,0.9626225490196079) 0%, rgba(40,40,56,1) 35%, rgba(211,219,221,1) 100%);
    position: sticky;
    top: 0;
    z-index: 3;

    ${mobile({height: "60px"})}
    ${tablet({height: "80px"})}
    
`

const Wrapper = styled.div`
    padding: 20px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 25px;

    ${mobile({padding: "10px 0px"})}
   
   
`

const LeftCorner = styled.div`
    flex: 1;
    display: flex;
    ${mobile({display: "none"})}
    ${tablet({display: "none"})}
    

`



const Language = styled.span`
    cursor: pointer;
    padding: 0 5px;
    opacity: 0.8;

    ${tablet({paddingBottom: "10px"})}
    
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    width: 50%;
    max-width: 700px;
    background: #fff;
    border-radius: 60px;
    border-color: rgba(129, 96, 221);
    padding: 5px;
    opacity: 0.8;

    &:hover {
        color: var(--black);
        opacity: 100%;
    }

    ${mobile({display: "none"})}
    ${tablet({display: "none"})}
   
`

const Input = styled.input`
    background: transparent;
    flex: 1;
    border: 0;
    border-radius: 60px;
    outline: none;
    font-size: 18px;
    color: var(--teal);
    opacity: 0.6;
    padding: 5px;
    
    ${tablet({height: "50px", fontSize: '14px'})}
    
`

const CenterWing = styled.div`
    flex: 1;
    text-align: center;

    ${mobile({padding: "10px"})}
    ${tablet({height: "50px", fontSize: '29px'})}
`

const Logo = styled.h1`
    font-weight: 600;
    letter-spacing: 1px;
    cursor: pointer;

    ${mobile({fontSize: "22px", float: "left"})}
    ${tablet({fontSize: "35px" })}

`

const RightCorner = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    ${mobile({position: "relative", top: "-5px", marginRight: "-5px"})}
    ${tablet({position: "relative", top: '-5px', right: '35px' })}

`;

const MenuItem = styled.div`
    font-family: 'Capriola', sans-serif;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    margin-left: 25px;
    opacity: 0.9;

    ${mobile({position: "relative", right: '25px'})}
    
`

const MenuItemButton = styled.a`
    font-family: 'Capriola', sans-serif;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    margin-left: 25px;
    opacity: 0.9;

    ${mobile({ display: 'none'})}
    ${tablet({ display: 'none' })}
`

const MenuContainer = styled.div`
    display: none;
    cursor: pointer;

    ${mobile({ display: "flex", position: "relative", right: "25px"})}
    ${tablet({ display: "flex" })}
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper> 
            <LeftCorner>
                <Language>
                    <LanguageRounded style={{fontSize: 30}} />
                </Language>
                <SearchContainer style={{maxHeight: 30}}>
                    <Input placeholder="Search Product" style={{fontSize: '12px'}} />
                </SearchContainer>
            </LeftCorner>
            <CenterWing><Logo>MJ'S WIG.</Logo></CenterWing>
            <RightCorner>
            <MenuItem>
                <Badge style={{position: 'relative', left: '-15px' }} badgeContent={1} color="secondary" fontSize="5px"> 
                    <LocalMallOutlined style={{fontSize: '25px'}}  />
                </Badge>
                </MenuItem>
                <MenuItemButton>REGISTER</MenuItemButton>
                <MenuItemButton>LOGIN</MenuItemButton>
                <MenuContainer> <MenuOpenOutlined style={{fontSize: '33px', color: '#d3d3d3'}} />  </MenuContainer>
            </RightCorner>
        </Wrapper>
    </Container>
  )
}

export default Navbar