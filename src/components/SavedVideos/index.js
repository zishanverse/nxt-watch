import {MdPlaylistAdd} from 'react-icons/md'
import NavBar from '../NavBar'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'
import FailureViewCard from '../FailureViewCard'
import AppContext from '../../Context/context'
import {
  MainContainer,
  Page,
  BannerCard,
  PageLogo,
  BannerName,
  VideoListCard,
} from '../../styledComponent'
import '../../App.css'

const SavedVideos = () => {
  const savedList = (darkTheme, list) => (
    <>
      <BannerCard darkTheme={darkTheme} data-testid="banner">
        <PageLogo darkTheme={darkTheme}>
          <MdPlaylistAdd className="banner-logo" />
        </PageLogo>
        <BannerName darkTheme={darkTheme}>Saved Videos</BannerName>
      </BannerCard>
      <VideoListCard darkTheme={darkTheme}>
        {list.map(each => (
          <VideoItem key={each.id} item={each} />
        ))}
      </VideoListCard>
    </>
  )

  return (
    <>
      <NavBar />
      <Page>
        <SideBar />
        <AppContext.Consumer>
          {value => {
            const {darkTheme, list} = value

            return (
              <MainContainer
                data-testid="savedVideos"
                darkTheme={darkTheme}
                notHome
              >
                {list.length === 0 ? (
                  <FailureViewCard savedVideos />
                ) : (
                  savedList(darkTheme, list)
                )}
              </MainContainer>
            )
          }}
        </AppContext.Consumer>
      </Page>
    </>
  )
}

export default SavedVideos
