import styled from 'styled-components'

export const FailureView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 40vh;
`
export const Img = styled.img`
  margin-top: 50px;
  width: 35%;
  @media (max-width: 575px) {
    width: 90%;
  }
`
export const ErrorHead = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#fff' : '#00306e')};
  margin-bottom: 10px;
`

export const ErrorPara = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#64748b' : '#475569')};
  font-size: 17px;
`
export const Btn = styled.button`
  font-family: 'Roboto';
  color: #fff;
  background-color: #4f46e5;
  border: 0px;
  border-radius: 5px;
  height: 47px;
  width: 100px;
  font-size: 15px;
  margin-bottom: 30px;
`
