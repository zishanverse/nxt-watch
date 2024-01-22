import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
  padding: ${props => (props.notHome ? '0px' : '20px')};
  overflow: auto;
  width: 100%;
`
export const Page = styled.div`
  display: flex;
  flex-direction: ${props => (props.content ? 'column' : 'row')};
  height: 90vh;
`
export const BannerCard = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: ${props => (props.darkTheme ? '#181818' : '#cccccc')};
  @media (max-width: 575px) {
    padding: 10px;
  }
`
export const PageLogo = styled.div`
  border-radius: 100px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: certer;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#cbd5e1')};
  margin-right: 20px;
  margin-left: 15px;
  @media (max-width: 575px) {
    padding: 10px;
  }
`
export const BannerName = styled.h1`
  color: ${props => (props.darkTheme ? '#ffffff' : '#1e293b')};
  font-family: 'Roboto';
  @media (max-width: 575px) {
    font-size: 20px;
    margin: 5px;
  }
`
export const VideoListCard = styled.div`
  padding: 30px;
  display: ${props => (props.game ? 'flex' : null)};
  justify-content: ${props => (props.game ? 'space-between' : null)};
  flex-wrap: ${props => (props.game ? 'wrap' : 'nowrap')};
  @media (max-width: 757px) {
    padding: 10px;
  }
`
export const Card = styled.div`
  display: flex;
  justify-content: ${props => (props.loader ? 'center' : 'space-between')};
  align-items: ${props => (props.loader ? 'center' : null)};
  flex-wrap: wrap;
  min-height: 40vh;
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`
export const ListItem = styled.li`
  margin-right: 25px;
  padding: 0px;
  display: flex;
  align-items: center;
  list-style-type: ${props => (props.time ? 'disc' : 'none')};
  color: ${props => (props.darkTheme ? '#64748b' : '#94a3b8')};
`
export const Title = styled.p`
  margin-top: 10px;
  margin-bottom: 0px;
  font-weight: 500;
  font-size: 2vw;
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#ebebeb' : '#1e293b')};
  @media (max-width: 575px) {
    font-size: 15px;
    margin-bottom: 10px;
  }
`
export const Text = styled.p`
  color: ${props => (props.darkTheme ? '#64748b' : '#94a3b8')};
  font-family: 'Roboto';
  margin-top: 5px;
  margin-bottom: 10px;
  @media (max-width: 575px) {
    font-size: 13px;
  }
`
export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  align-items: 'flex-start';
  padding: 0px;
  width: ${props => (props.game ? '30%' : null)};
  margin: ${props => (props.mainContainer ? '30px' : '0px')};
  margin-bottom: ${props => (props.game ? '40px' : null)};
  
  @media (max-width: 575px) {
    margin: ${props => (props.mainContainer ? '10px' : '0px')};
    margin-bottom: ${props => (props.small ? '30px' : null)};
    width: ${props => {
      if (props.game) {
        return '45%'
      }
      if (props.small) {
        return '50%'
      }
      if (props.list) {
        return '100%'
      }
      return null
    }};
    
`
export const Img = styled.img`
  width: ${props => (props.game ? '100%' : '30vw')};
  height: ${props => (props.game ? '23vw' : '15vw')};
  margin-right: 12px;
  @media (max-width: 767px) {
    height: ${props => (props.game ? '27vw' : '15vw')};
  }
  @media (max-width: 575px) {
    width: ${props => (props.small ? '45vw' : null)};
    height: ${props => (props.small ? '30vw' : null)};
  }
`
