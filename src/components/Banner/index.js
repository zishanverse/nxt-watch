import {IoClose} from 'react-icons/io5'
import {BannerCard, CloseBtn, Img, Premium, GetIt} from './styled'
import '../../App.css'

const Banner = props => {
  const {func} = props

  return (
    <BannerCard data-testid="banner">
      <div>
        <Img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <Premium>Buy Nxt Watch Premium prepaid plans with UPI</Premium>
        <GetIt>GET IT NOW</GetIt>
      </div>

      <CloseBtn type="button" data-testid="close" onClick={() => func()}>
        <IoClose className="close" />
      </CloseBtn>
    </BannerCard>
  )
}

export default Banner
