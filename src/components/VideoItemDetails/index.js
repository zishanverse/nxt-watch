import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import AppContext from '../../Context/context'
import NavBar from '../NavBar'
import SideBar from '../SideBar'
import FailureViewCard from '../FailureViewCard'
import {MainContainer, Page, Card} from '../../styledComponent'
import {Text, Title, Flex, ListItem, Btn, Line, Img} from './styled'
import '../../App.css'

class VideoItemDetails extends Component {
  state = {
    like: false,
    dislike: false,
    save: false,
    list: [],
    isLoading: 'INITIAL',
  }

  componentDidMount() {
    this.fetchData()
  }

  convertCase = list => ({
    channel: {
      name: list.channel.name,
      profileImageUrl: list.channel.profile_image_url,
      subscriberCount: list.channel.subscriber_count,
    },
    description: list.description,
    id: list.id,
    publishedAt: list.published_at,
    thumbnailUrl: list.thumbnail_url,
    title: list.title,
    videoUrl: list.video_url,
    viewCount: list.view_count,
  })

  fetchData = async () => {
    this.setState({isLoading: 'IN-PROGRESS'})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwt = Cookies.get('jwt_token')
    const options = {method: 'GET', headers: {Authorization: `Bearer ${jwt}`}}
    const response = await fetch(`https://apis.ccbp.in/videos/${id}`, options)
    if (response.ok) {
      const data = await response.json()
      const updated = this.convertCase(data.video_details)
      this.setState({list: updated, isLoading: 'SUCCESS'})
    } else {
      this.setState({isLoading: 'FAILURE'})
    }
  }

  liked = () => this.setState({like: true, dislike: false})

  disliked = () => this.setState({like: false, dislike: true})

  saved = async (addToSaveList, deleteFromList) => {
    await this.setState(pre => ({
      save: !pre.save,
    }))
    const {list, save} = this.state
    if (save) {
      addToSaveList({...list, save})
    } else {
      deleteFromList(list.id)
    }
  }

  loading = () => (
    <Card loader>
      <div className="loader-container loader" data-testid="loader">
        <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
      </div>
    </Card>
  )

  successView = (darkTheme, savelist, deleteFromList, addToSaveList) => {
    const {list, like, dislike} = this.state
    const {
      channel,
      id,
      description,
      publishedAt,
      title,
      videoUrl,
      viewCount,
    } = list
    const {name, profileImageUrl, subscriberCount} = channel
    const time = formatDistanceToNow(new Date(publishedAt)).split(' ')
    const found = savelist.find(each => each.id === id)
    const save = found !== undefined ? found.save : false

    return (
      <>
        <ReactPlayer url={videoUrl} width="100%" />
        <Title darkTheme={darkTheme}>{title}</Title>
        <Flex medium>
          <Flex list as="ul">
            <ListItem>
              <Text darkTheme={darkTheme}>{viewCount} views</Text>
            </ListItem>
            <ListItem time>
              <Text darkTheme={darkTheme}>{time[1]} years ago</Text>
            </ListItem>
          </Flex>
          <Flex buttons>
            <Btn
              type="button"
              darkTheme={darkTheme}
              active={like}
              onClick={this.liked}
            >
              <BiLike className="logos" />
              <Text active={like} darkTheme={darkTheme}>
                Like
              </Text>
            </Btn>
            <Btn
              type="button"
              darkTheme={darkTheme}
              active={dislike}
              onClick={this.disliked}
            >
              <BiDislike className="logos" />
              <Text active={dislike} darkTheme={darkTheme}>
                Dislike
              </Text>
            </Btn>
            <Btn
              type="button"
              darkTheme={darkTheme}
              active={save}
              onClick={() => this.saved(addToSaveList, deleteFromList)}
            >
              <MdPlaylistAdd className="logos" />
              {save ? 'Saved' : 'Save'}
            </Btn>
          </Flex>
        </Flex>
        <Line darkTheme={darkTheme} />
        <Flex list>
          <Img src={profileImageUrl} alt="channel logo" />
          <Flex column list>
            <Flex column list>
              <Title darkTheme={darkTheme}>{name}</Title>
              <Text subscribers darkTheme={darkTheme}>
                {subscriberCount} subscribers
              </Text>
            </Flex>
            <Text description darkTheme={darkTheme}>
              {description}
            </Text>
          </Flex>
        </Flex>
      </>
    )
  }

  failureView = () => <FailureViewCard func={this.fetchData} failure />

  renderStatus = (darkTheme, list, deleteFromList, addToSaveList) => {
    const {isLoading} = this.state

    switch (isLoading) {
      case 'IN-PROGRESS':
        return this.loading()
      case 'SUCCESS':
        return this.successView(darkTheme, list, deleteFromList, addToSaveList)

      case 'FAILURE':
        return this.failureView()
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
              const {darkTheme, list, addToSaveList, deleteFromList} = value

              return (
                <MainContainer
                  data-testid="videoItemDetails"
                  darkTheme={darkTheme}
                >
                  {this.renderStatus(
                    darkTheme,
                    list,
                    deleteFromList,
                    addToSaveList,
                  )}
                </MainContainer>
              )
            }}
          </AppContext.Consumer>
        </Page>
      </>
    )
  }
}

export default VideoItemDetails
