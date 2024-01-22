import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import AppContext from '../../Context/context'
import {
  SideBarContainer,
  NavigationCard,
  PageName,
  ContactUsContainer,
  Para,
  Flex,
  Img,
} from './styled'
import './index.css'

class SideBar extends Component {
  render() {
    const {match} = this.props
    const {path} = match
    return (
      <AppContext.Consumer>
        {value => {
          const {darkTheme} = value

          return (
            <SideBarContainer darkTheme={darkTheme}>
              <div>
                <Link to="/" className="link">
                  <NavigationCard darkTheme={darkTheme} active={path === '/'}>
                    <AiFillHome
                      className={`${path === '/' ? 'active' : 'inactive'}`}
                    />
                    <PageName active={path === '/'} darkTheme={darkTheme}>
                      Home
                    </PageName>
                  </NavigationCard>
                </Link>

                <Link to="/trending" className="link">
                  <NavigationCard
                    darkTheme={darkTheme}
                    active={path === '/trending'}
                  >
                    <HiFire
                      className={`${
                        path === '/trending' ? 'active' : 'inactive'
                      }`}
                    />
                    <PageName
                      active={path === '/trending'}
                      darkTheme={darkTheme}
                    >
                      Trending
                    </PageName>
                  </NavigationCard>
                </Link>

                <Link to="/gaming" className="link">
                  <NavigationCard
                    darkTheme={darkTheme}
                    active={path === '/gaming'}
                  >
                    <SiYoutubegaming
                      className={`${
                        path === '/gaming' ? 'active' : 'inactive'
                      }`}
                    />
                    <PageName active={path === '/gaming'} darkTheme={darkTheme}>
                      Gaming
                    </PageName>
                  </NavigationCard>
                </Link>

                <Link to="/saved-videos" className="link">
                  <NavigationCard
                    darkTheme={darkTheme}
                    active={path === '/saved-videos'}
                  >
                    <MdPlaylistAdd
                      className={`${
                        path === '/saved-videos' ? 'active' : 'inactive'
                      }`}
                    />
                    <PageName
                      active={path === '/saved-videos'}
                      darkTheme={darkTheme}
                    >
                      Saved videos
                    </PageName>
                  </NavigationCard>
                </Link>
              </div>

              <ContactUsContainer>
                <Para darkTheme={darkTheme}>CONTACT US</Para>
                <Flex>
                  <Img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <Img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <Img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </Flex>
                <Para darkTheme={darkTheme}>
                  Enjoy! Now to see your channels and recommendations!
                </Para>
              </ContactUsContainer>
            </SideBarContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default withRouter(SideBar)
