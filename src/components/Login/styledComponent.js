import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.darkTheme ? '#475569' : '#f1f1f1')};
  height: 100vh;
`

export const LoginCard = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => (props.darkTheme ? '#181818' : '#fff')};
  width: 50vw;
  @media (max-width: 767px) {
    width: 80vw;
  }
  box-shadow: 0px 0px 20px 5px #d7dfe9;
  border-radius: 10px;
`

export const Label = styled.label`
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#475569')};
  font-weight: 500;
  margin-bottom: 6px;
  outline: none;
`

export const Input = styled.input`
  border: 1px solid #f1f1f1;
  color: #475569;
  height: ${props => (props.check ? '25px' : '35px')};
  padding: 14px;
  border-radius: 4px;
  margin-bottom: ${props => (props.check ? '0px' : '15px;')};
  margin-right: ${props => (props.check ? '10px' : '0px;')};
  outline: none;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '')};
`

export const Logo = styled.img`
  width: 50%;
  align-self: center;
  margin-bottom: 80px;
`
export const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

<<<<<<< HEAD
export const ShowPass = styled.label`
=======
export const ShowPass = styled.p`
>>>>>>> ecb772aefd667f5e8f4815f26b161c6f0d9df1dc
  color: ${props => (props.darkTheme ? '#f1f1f1' : '#475569')};
  font-weight: bold;
`

export const Button = styled.button`
<<<<<<< HEAD
  color: #ffffff;
=======
  color: #fff;
>>>>>>> ecb772aefd667f5e8f4815f26b161c6f0d9df1dc
  background-color: #3b82f6;
  width: 100%;
  height: 40px;
  display: flex;
  font-size: 15px;
  justify-content: center;
  align-items: center;
  border: 0px;
  border-radius: 7px;
  margin-bottom: 20px;
`
export const Error = styled.p`
  color: #ff0b37;
`
