import { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: var(--black);
    color: var(--white);
    display: ${props=> props.isClicked ? 'none' : 'flex'};
    justify-content: center;
    align-items: center;
    font-family: 'Rajdhani', sans-serif;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 1.06;
}
`

const Button = styled.button`
    display: inherit;
    justify-content: space-around;
    padding: 0 5px;
    margin-left: 5px;
    cursor: pointer;
`

const Announcement = () => {
  const [isClicked, setIsClicked] = useState(false)

  const closeAnnouncement = () => {
    setIsClicked(!isClicked)
  };


  return (
    <Container isClicked={isClicked} closeAnnouncement={closeAnnouncement}>
        Super Deal! Free Shipping on Orders Over $70 <Button onClick={closeAnnouncement}> close </Button>
    </Container>
  )
}

export default Announcement