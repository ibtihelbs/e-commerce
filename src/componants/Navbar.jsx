import styled from "styled-components"

const Container = styled.div`
height: 60px;
`
const Wrapper = styled.div`
padding: 10px 20px;
display:flex;
justify-content: center;
`;
const Left = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
`
const Language = styled.div`
   font-size: 14px;
   cursor: pointer;
`
const Input = styled.input`
    border: none;
    outline: none;
`
const SearchContainer = styled.div`
   border: .5px solid lightgrey;
   display: flex;
   align-items: center;
   margin-left: 25px;
   padding-right: 5px;
`
const Center = styled.div`
   flex: 1;
   display: flex;
   justify-content: center;
`
const Logo = styled.h1`
 font-weight: bold;
`
const Right = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
   justify-content: flex-end;
   gap: 25px;
`
const MenuItem = styled.div`
   font-size: 14px;
   cursor: pointer
`;
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
              <Language>EN</Language>
              <SearchContainer>
                <Input/> 
                <svg xmlns="http://www.w3.org/2000/svg" style={{width :"16px"}} className="icon icon-tabler icon-tabler-search" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <circle cx="10" cy="10" r="7" />
                  <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
              </SearchContainer>
            </Left>
            <Center>
                <Logo>
                    ibti.
                </Logo>
            </Center>
            <Right>
               <MenuItem>Login</MenuItem>
               <MenuItem>Register</MenuItem>
               <MenuItem>
               <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-inbox" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <path d="M4 13h3l3 3h4l3 -3h3" />
                </svg>
              </MenuItem>
            
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar