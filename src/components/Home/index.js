import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {IoSearch} from 'react-icons/io5'
import Cookies from 'js-cookie'
import AppContext from '../../Context/context'
import {HomeRoute, SearchCard, Input, Page, SearchLogoBtn} from './style'
import {Card} from '../../styledComponent'
import SideBar from '../SideBar'
import FailureViewCard from '../FailureViewCard'
import NavBar from '../NavBar'
import Banner from '../Banner'
import VideoCard from '../VideoCard'

class Home extends Component {
  state = {banner: true, search: '', isLoading: 'INITIAL', list: []}

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({isLoading: 'IN-PROGRESS'})
    const {search} = this.state
    const jwt = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
    const response = await fetch(
      `https://apis.ccbp.in/videos/all?search=${search}`,
      options,
    )
    if (response.ok) {
      const data = await response.json()
      const dataCamelCase = data.videos.map(each => this.convertCase(each))
      this.setState({list: dataCamelCase, isLoading: 'SUCCESS'})
    } else {
      this.setState({isLoading: 'FAILURE'})
    }
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

  changeSearch = event =>
    this.setState({search: event.target.value.toLowerCase()})

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

  bannerShow = () => {
    this.setState({banner: false})
  }

  successView = () => {
    const {list} = this.state
    if (list.length === 0) {
      return <FailureViewCard func={this.fetchData} />
    }
    return (
      <Card>
        {list.map(each => (
          <VideoCard key={each.id} item={each} />
        ))}
      </Card>
    )
  }

  renderHome = darkTheme => {
    const {isLoading} = this.state

    switch (isLoading) {
      case 'IN-PROGRESS':
        return this.loading(darkTheme)
      case 'SUCCESS':
        return this.successView()
      case 'FAILURE':
        return <FailureViewCard failure func={this.fetchData} />
      default:
        return null
    }
  }

  render() {
    const {banner} = this.state
    return (
      <>
        <NavBar />
        <Page>
          <SideBar />
          <Page content>
            {banner && <Banner func={this.bannerShow} />}
            <AppContext.Consumer>
              {value => {
                const {darkTheme} = value

                return (
                  <HomeRoute darkTheme={darkTheme} data-testid="home">
                    <SearchCard darkTheme={darkTheme}>
                      <Input
                        placeholder="Search"
                        type="search"
                        darkTheme={darkTheme}
                        onChange={this.changeSearch}
                      />
                      <SearchLogoBtn
                        type="button"
                        darkTheme={darkTheme}
                        data-testid="searchButton"
                        onClick={() => this.fetchData()}
                      >
                        <IoSearch className={darkTheme ? 'dark' : 'light'} />
                      </SearchLogoBtn>
                    </SearchCard>
                    {this.renderHome(darkTheme)}
                  </HomeRoute>
                )
              }}
            </AppContext.Consumer>
          </Page>
        </Page>
      </>
    )
  }
}

export default Home
