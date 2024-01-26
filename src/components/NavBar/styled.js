import styled from 'styled-components'

export const Nav = styled.div`
  background-color: ${props => (props.darkTheme ? '#313131' : '#fff')};
  padding: 15px;
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 767px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${props => (props.logout ? '90%' : '200px')};
  align-items: center;
  @media (max-width: 767px) {
    width: ${props => (props.logout ? '90%' : '130px')};
  }
  @media (max-width: 575px) {
    width: ${props => (props.small ? '60%' : null)};
  }
`

<<<<<<< HEAD
export const List = styled.ul`
  list-style-type: none;
  padding: 0px;
`

=======
>>>>>>> ecb772aefd667f5e8f4815f26b161c6f0d9df1dc
export const Img = styled.img`
  width: ${props => (props.logo ? '35%' : '15%')};
  @media (max-width: 767px) {
    width: ${props => (props.logo ? '40%' : '15%')};
    display: ${props => (props.profile ? 'none' : null)};
  }
`
export const PopCard = styled.div`
  background-color: ${props => (props.darkTheme ? '#383838' : '#ffffff')};
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  @media (max-width: 767px) {
    padding: 15px;
    height: 150px;
  }
`
export const WarningText = styled.p`
  color: ${props => (props.darkTheme ? '#fff' : '#313131')};
  font-family: 'Roboto';
  margin-bottom: 30px;
`

export const Btn = styled.button`
  background-color: ${props => (props.darkTheme ? '#313131' : '#fff')};
  border: 1px solid ${props => (props.darkTheme ? '#fff' : '#3b82f6')};
  color: ${props => (props.darkTheme ? '#fff' : '#3b82f6')};
  font-family: 'Roboto';
  font-size: 20px;
  height: 35px;
  width: 100px;
  font-weight: bold;
  border-radius: 3px;
  @media (max-width: 767px) {
    display: ${props => (props.cancelAconfirm ? null : 'none')};
  }
`
export const NavBtn = styled.button`
  padding: 0px;
  margin: 0px;
  color: ${props => (props.darkTheme ? '#fff' : '#000')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background-color: transparent;
  border: 0px;
  @media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 575px) {
    font-size: 25px;
  }
`

export const ThemeBtn = styled.button`
  padding: 0px;
  margin: 0px;
  border-radius: 20px;
  background-color: transparent;
  border: 0px;
`
export const MenuCard = styled.div`
  background-color: ${props => (props.darkTheme ? '#313131' : '#fff')};
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`

export const CloseBtnContainer = styled.div`
  display: flex;
  height: 35vh;
  justify-content: flex-end;
  align-items: center;
  width: 85vw;
  font-size: 20px;
  color: ${props => (props.darkTheme ? '#fff' : '#000')};
`
