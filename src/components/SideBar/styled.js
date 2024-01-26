import styled from 'styled-components'

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
  width: 20vw;
  background-color: ${props => (props.darkTheme ? '#313131' : '#fff')};
  @media (max-width: 767px) {
    display: none;
  }
`
<<<<<<< HEAD
export const List = styled.ul`
  list-style-type: none;
  padding: 0px;
`
=======
>>>>>>> ecb772aefd667f5e8f4815f26b161c6f0d9df1dc

export const NavigationCard = styled.div`
  background-color: ${props => {
    if (props.darkTheme) {
      if (props.active) {
        return '#606060'
      }
      return '#313131'
    }
    if (props.active) {
      return '#cbd5e1'
    }
    return '#fff'
  }};
  display: flex;
  justify-content: 'flex-start';
  align-items: center;
`

export const PageName = styled.p`
  color: ${props => (props.darkTheme ? '#fff' : '#000000')};
  font-weight: ${props => (props.active ? 'bold' : 400)};
`
export const ContactUsContainer = styled.div`
  padding: 20px;
  padding-right: 30px;
`
export const Para = styled.p`
  color: ${props => (props.darkTheme ? '#fff' : '#00306e')};
  font-weight: bold;
`
export const Flex = styled.div`
  display: flex;
  align-items: center;
`
export const Img = styled.img`
  margin-right: 10px;
  width: 15%;
`
