import {withRouter, Link} from 'react-router-dom'
import {WiDaySunny} from 'react-icons/wi'
import {IoIosCloudyNight} from 'react-icons/io'
import {IoMenu, IoClose} from 'react-icons/io5'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import AppContext from '../../Context/context'
import {
  Nav,
  Img,
  Flex,
  PopCard,
  WarningText,
  Btn,
  ThemeBtn,
  NavBtn,
  MenuCard,
  CloseBtnContainer,
} from './styled'
import {NavigationCard, PageName} from '../SideBar/styled'
import './index.css'

const NavBar = props => {
  const logout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  const {match} = props
  const {path} = match

  const navigation = darkTheme => (
    <div>
      <Link to="/" className="link">
        <NavigationCard darkTheme={darkTheme} active={path === '/'}>
          <AiFillHome
            className={`${path === '/' ? 'menu-active' : 'menu-inactive'}`}
          />
          <PageName active={path === '/'} darkTheme={darkTheme}>
            Home
          </PageName>
        </NavigationCard>
      </Link>

      <Link to="/trending" className="link">
        <NavigationCard darkTheme={darkTheme} active={path === '/trending'}>
          <HiFire
            className={`${
              path === '/trending' ? 'menu-active' : 'menu-inactive'
            }`}
          />
          <PageName active={path === '/trending'} darkTheme={darkTheme}>
            Trending
          </PageName>
        </NavigationCard>
      </Link>

      <Link to="/gaming" className="link">
        <NavigationCard darkTheme={darkTheme} active={path === '/gaming'}>
          <SiYoutubegaming
            className={`${
              path === '/gaming' ? 'menu-active' : 'menu-inactive'
            }`}
          />
          <PageName active={path === '/gaming'} darkTheme={darkTheme}>
            Gaming
          </PageName>
        </NavigationCard>
      </Link>

      <Link to="/saved-videos" className="link">
        <NavigationCard darkTheme={darkTheme} active={path === '/saved-videos'}>
          <MdPlaylistAdd
            className={`${
              path === '/saved-videos' ? 'menu-active' : 'menu-inactive'
            }`}
          />
          <PageName active={path === '/saved-videos'} darkTheme={darkTheme}>
            Saved videos
          </PageName>
        </NavigationCard>
      </Link>
    </div>
  )

  return (
    <AppContext.Consumer>
      {value => {
        const {darkTheme, changeTheme} = value

        return (
          <Nav darkTheme={darkTheme}>
            <Link to="/">
              <Img
                logo
                src={
                  darkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
              />
            </Link>
            <Flex small>
              <ThemeBtn
                type="button"
                data-testid="theme"
                onClick={() => changeTheme()}
              >
                {darkTheme ? (
                  <IoIosCloudyNight
                    className={`theme ${darkTheme ? 'dark' : null}`}
                  />
                ) : (
                  <WiDaySunny
                    className={`theme ${darkTheme ? 'dark' : null}`}
                  />
                )}
              </ThemeBtn>
              <Img
                profile
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                modal
                trigger={
                  <NavBtn type="button" darkTheme={darkTheme}>
                    <IoMenu />
                  </NavBtn>
                }
              >
                {close => (
                  <MenuCard darkTheme={darkTheme}>
                    <CloseBtnContainer darkTheme={darkTheme}>
                      <IoClose onClick={() => close()} />
                    </CloseBtnContainer>
                    {navigation(darkTheme)}
                  </MenuCard>
                )}
              </Popup>

              <Popup
                modal
                trigger={
                  <NavBtn type="button" darkTheme={darkTheme}>
                    <FiLogOut />
                  </NavBtn>
                }
              >
                {close => (
                  <PopCard darkTheme={darkTheme}>
                    <WarningText darkTheme={darkTheme}>
                      Are you sure, you want to logout?
                    </WarningText>
                    <Flex logout cancelAconfirm>
                      <Btn
                        cancelAconfirm
                        darkTheme={darkTheme}
                        type="button"
                        onClick={() => close()}
                      >
                        Cancel
                      </Btn>
                      <Btn
                        cancelAconfirm
                        darkTheme={darkTheme}
                        type="button"
                        onClick={() => logout()}
                      >
                        Confirm
                      </Btn>
                    </Flex>
                  </PopCard>
                )}
              </Popup>

              <Popup
                modal
                trigger={
                  <Btn logout darkTheme={darkTheme} type="button">
                    Logout
                  </Btn>
                }
              >
                {close => (
                  <PopCard darkTheme={darkTheme}>
                    <WarningText darkTheme={darkTheme}>
                      Are you sure, you want to logout?
                    </WarningText>
                    <Flex logout>
                      <Btn
                        darkTheme={darkTheme}
                        type="button"
                        onClick={() => close()}
                      >
                        Cancel
                      </Btn>
                      <Btn
                        darkTheme={darkTheme}
                        type="button"
                        onClick={() => logout()}
                      >
                        Confirm
                      </Btn>
                    </Flex>
                  </PopCard>
                )}
              </Popup>
            </Flex>
          </Nav>
        )
      }}
    </AppContext.Consumer>
  )
}

export default withRouter(NavBar)
