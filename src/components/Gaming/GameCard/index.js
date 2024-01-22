import {Link} from 'react-router-dom'
import AppContext from '../../../Context/context'
import {Flex, Title, Text, Img} from '../../../styledComponent'

const VideoItem = props => {
  const {item} = props
  const {id, thumbnailUrl, title, viewCount} = item

  return (
    <AppContext.Consumer>
      {value => {
        const {darkTheme} = value

        return (
          <Flex column game>
            <Link to={`/videos/${id}`} className="link">
              <Img game src={thumbnailUrl} alt="video thumbnail" />

              <Title darkTheme={darkTheme}>{title}</Title>
              <Text darkTheme={darkTheme}>{viewCount}</Text>
            </Link>
          </Flex>
        )
      }}
    </AppContext.Consumer>
  )
}

export default VideoItem
