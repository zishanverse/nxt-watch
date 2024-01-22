import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
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
  Card,
} from '../../styledComponent'
import '../../App.css'

class Trending extends Component {
  state = {isLoading: 'INITIAL', list: []}

  componentDidMount() {
    this.fetchData()
  }

  convertCase = each => ({
    id: each.id,
    channel: {
      name: each.channel.name,
      profileImageUrl: each.channel.profile_image_url,
    },
    publishedAt: each.published_at,
    thumbnailUrl: each.thumbnail_url,
    title: each.title,
    viewCount: each.view_count,
  })

  fetchData = async () => {
    this.setState({isLoading: 'IN-PROGRESS'})
    const jwt = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
    const response = await fetch(
      'https://apis.ccbp.in/videos/trending',
      options,
    )
    if (response.ok) {
      const data = await response.json()
      const updated = data.videos.map(each => this.convertCase(each))
      this.setState({list: updated, isLoading: 'SUCCESS'})
    } else {
      this.setState({isLoading: 'FAILURE'})
    }
  }

  loading = darkTheme => (
    <Card loader className="loader-container" data-testid="loader">
      <Loader
        type="ThreeDots"
        color={darkTheme ? '#ffffff' : '#000000'}
        height="50"
        width="50"
      />
    </Card>
  )

  savedList = (darkTheme, list) => (
    <>
      <BannerCard darkTheme={darkTheme} data-testid="banner">
        <PageLogo darkTheme={darkTheme}>
          <HiFire className="banner-logo" />
        </PageLogo>
        <BannerName darkTheme={darkTheme}>Trending</BannerName>
      </BannerCard>
      <VideoListCard darkTheme={darkTheme}>
        {list.map(each => (
          <VideoItem key={each.id} item={each} />
        ))}
      </VideoListCard>
    </>
  )

  renderHome = darkTheme => {
    const {isLoading, list} = this.state

    switch (isLoading) {
      case 'IN-PROGRESS':
        return this.loading(darkTheme)
      case 'SUCCESS':
        return this.savedList(darkTheme, list)
      case 'FAILURE':
        return <FailureViewCard failure func={this.fetchData} />
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <NavBar />
        <Page>
          <SideBar />
          <AppContext.Consumer>
            {value => {
              const {darkTheme} = value
              return (
                <MainContainer
                  data-testid="trending"
                  darkTheme={darkTheme}
                  notHome
                >
                  {this.renderHome(darkTheme)}
                </MainContainer>
              )
            }}
          </AppContext.Consumer>
        </Page>
      </>
    )
  }
}

export default Trending
