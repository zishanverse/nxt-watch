import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  padding: 0px;
  justify-content: ${props => (props.list ? 'flex-start' : 'space-between')};
  align-items: ${props => (props.list ? 'flex-start' : 'center')};
  width: ${props => (props.buttons ? '25%' : null)};
  @media (max-width: 767px) {
    flex-direction: ${props => (props.medium ? 'column' : null)};
    align-items: ${props => (props.medium ? 'flex-start' : null)};
    margin-bottom: ${props => (props.medium ? '25px' : null)};
    width: ${props => (props.buttons ? '40%' : null)};
  }
  @media (max-width: 575px) {
    width: ${props => (props.buttons ? '65%' : null)};
  }
`
export const Title = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#ebebeb' : '#1e293b')};
`

export const Text = styled.p`
  color: ${props => {
    if (props.active) {
      return '#2563eb'
    }
    if (props.description) {
      if (props.darkTheme) {
        return '#ebebeb'
      }
      return '#1e293b'
    }
    return '#64748b'
  }};
  font-size: ${props => (props.description ? '16px' : '13px')};
  margin-top: 0px;
  font-weight: 400;
  font-family: 'Roboto';
  margin-bottom: ${props => (props.subscribers ? '30px' : '0px')};
  @media (max-width: 767px) {
    font-size: 15px;
  }
`

export const ListItem = styled.li`
  margin-right: 25px;
  padding: 0px;
  display: flex;
  align-items: center;
  list-style-type: ${props => (props.time ? 'disc' : 'none')};
  color: ${props => (props.darkTheme ? '#64748b' : '#94a3b8')};
`
export const Btn = styled.button`
  padding: 0px;
  margin: 0px;
  background-color: transparent;
  border: 0px;
  font-size: 17px;
  display: flex;
  align-items: center;
  color: ${props => {
    if (props.active) {
      return '#2563eb'
    }
    return '#64748b'
  }};
`
export const Line = styled.hr`
  background-color: ${props => (props.darkTheme ? '#64748b' : '#7e858e')};
`
export const Img = styled.img`
  height: 30px;
  width: 30px;
  margin-top: 10px;
  margin-right: 10px;
`
