import styled from "styled-components"

const Container = styled.div`
    position: relative;
    height: 10%;
    background: rgb(2,0,36);
    background-size: cover;
    border-image: linear-gradient(to right bottom, rgba(2,0,36,0.9626225490196079) 0%, rgba(40,40,56,1) 35%, rgba(211,219,221,1) 100%);
    padding: 35px;
`

const Desc = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 30px 20px;
    padding-bottom: 10px;
    color: #ddd;
`

const Span = styled.div`
    background: rgb(2,0,36);
    border-image: linear-gradient(to right bottom, rgba(2,0,36,0.9626225490196079) 0%, rgba(40,40,56,1) 35%, rgba(211,219,221,1) 100%);
`

const Link = styled.a`
    color: var(--teal);
`

const FooterCredit = () => {
  return (
    <Container>
       <Desc> &copy; Maryjaneswig Corperate Limited 2022, 
            <Span>Developer <Link href="codewithvico.com">Codewithvico</Link> 
            </Span>
        </Desc>
    </Container>
  )
}

export default FooterCredit