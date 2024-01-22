import styled from 'styled-components'

export const Page = styled.div`
  display: flex;
  flex-direction: ${props => (props.content ? 'column' : 'row')};
  overflow-x: auto;
  height: 90vh;
`

export const HomeRoute = styled.div`
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  padding: 20px;
  height: auto;
`

export const SearchCard = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  margin-bottom: 20px;
  border: 1px solid ${props => (props.darkTheme ? '#606060' : '#7e858e')};
  @media (max-width: 767px) {
    width: 80%;
  }
  @media (max-width: 575px) {
    width: 100%;
  }
`

export const Input = styled.input`
  background-color: ${props => (props.darkTheme ? '#181818' : '#ffffff')};
  color: ${props => (props.darkTheme ? '#ebebeb' : '#7e858e')};
  padding: 10px;
  margin: 0px;
  barder: 0px;
  width: 85%;
  border: 0px;
`
export const SearchLogoBtn = styled.button`
  background-color: ${props => (props.darkTheme ? '#424242' : '#ebebeb')};
  color: ${props => (props.darkTheme ? '#606060' : '#1e293b')};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 37px;
  border: 0px;
  border-left: 1px solid ${props => (props.darkTheme ? '#606060' : '#7e858e')};
`
