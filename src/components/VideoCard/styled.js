import styled from 'styled-components'

export const ItemCard = styled.div`
  width: 30%;
  @media (max-width: 767px) {
    width: 45%;
  }
  @media (max-width: 575px) {
    width: 100%;
  }
`
export const Flex = styled.div`
  padding: 0px;
  margin-top: 10px;
  display: flex;
  align-items: ${props => (props.list ? 'center' : null)};
`
export const ListItem = styled.li`
  list-style-type: ${props => (props.time ? 'disc' : 'none')};
  margin-right: 25px;
  padding: 0px;
  color: ${props => (props.darkTheme ? '#64748b' : '#475569')};
`

export const Img = styled.img`
  width: ${props => (props.channel ? '30px' : '100%')};
  height: ${props => (props.channel ? '30px' : null)};
  margin-right: ${props => (props.channel ? '10px' : null)};
`
export const Text = styled.p`
  color: ${props => (props.darkTheme ? '#64748b' : '#475569')};
  font-size: 15px;
  margin-top: 0px;
  @media (max-width: 767px) {
    font-size: 15px;
  }
`

export const Title = styled.p`
  margin-top: 0px;
  color: ${props => (props.darkTheme ? '#ebebeb' : '#1e293b')};
`
