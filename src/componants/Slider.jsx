import styled from "styled-components"
const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
`;
const   Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  background-color:antiquewhite;
  border-radius: 50%;
  position: absolute;
  top:0;
  bottom: 0;
  margin: auto;
  left: ${(props)=> props.direction === "left" && "10px"};
  right:${(props)=> props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: .5;
`;

const Wrapper = styled.div`
 height: 100%;
`
const Slide = styled.div`
 width: 100vw;
 height: 100vh;
 display: flex;
 align-items: center;
 backgound-color: red;
`
const ImgContainer = styled.div`
  flex: 1;
  width: 100%;
`
const Image = styled.img`
  width: 80%;
`
const InfoContainer = styled.div`
  flex: 1;
`
export const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-left" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <line x1="5" y1="12" x2="19" y2="12" />
          <line x1="5" y1="12" x2="9" y2="16" />
          <line x1="5" y1="12" x2="9" y2="8" />
        </svg>
        </Arrow>
        <Wrapper>
           <Slide>
              <ImgContainer>
                <Image src="https://images.unsplash.com/photo-1580403304570-348b39d1b680?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="hoodies" />
              </ImgContainer>
              <InfoContainer>
               
              </InfoContainer>
           </Slide>
        </Wrapper>
        <Arrow direction="right">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <line x1="5" y1="12" x2="19" y2="12" />
          <line x1="15" y1="16" x2="19" y2="12" />
          <line x1="15" y1="8" x2="19" y2="12" />
        </svg>
        </Arrow>
    </Container>
  )
}
