import styled from 'styled-components'

export const BannerCard = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 35vh;
  background-size: cover;
  padding: 30px;
  width: 80vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 767px) {
    width: 100vw;
    height: 45vh;
  }
`
export const Img = styled.img`
  width: 35%;
`

export const Premium = styled.p`
  color: #181818;
  font-family: 'Roboto';
  font-size: 20px;
  @media (max-width: 767px) {
    font-size: 17px;
  }
`
export const GetIt = styled.button`
  background-color: #fff;
  border: 2px solid #181818;
  color: #181818;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
  height: 43px;
  width: 120px;
  margin-top: 20px;
  @media (max-width: 767px) {
    margin-top: 10px;
    height: 37px;
    width: 115px;
    font-size: 13px;
  }
`

export const CloseBtn = styled.button`
  border: 0px;
  padding: 0px;
  margin: 0px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`
