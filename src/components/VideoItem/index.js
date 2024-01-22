import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import AppContext from '../../Context/context'
import {ListItem, Title, Flex, Text, Img} from '../../styledComponent'

const VideoItem = props => {
  const {item} = props
  const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = item
  const {name} = channel
  const time = formatDistanceToNow(new Date(publishedAt)).split(' ')

  return (
    <AppContext.Consumer>
      {value => {
        const {darkTheme} = value

        return (
          <Link to={`/videos/${id}`} className="link">
            <Flex mainContainer>
              <Img src={thumbnailUrl} alt="video thumbnail" />
              <Flex column>
                <Title darkTheme={darkTheme}>{title}</Title>
                <Text darkTheme={darkTheme}>{name}</Text>
                <Flex list as="ul">
                  <ListItem>
                    <Text darkTheme={darkTheme}>{viewCount} views</Text>
                  </ListItem>
                  <ListItem time>
                    <Text darkTheme={darkTheme}>{time[1]} years ago</Text>
                  </ListItem>
                </Flex>
              </Flex>
            </Flex>
          </Link>
        )
      }}
    </AppContext.Consumer>
  )
}

export default VideoItem
