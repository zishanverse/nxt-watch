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
          <li>
            <Link to={`/videos/${id}`} className="link">
              <Flex mainContainer>
                <Img small src={thumbnailUrl} alt="video thumbnail" />
                <Flex column small>
                  <Title small darkTheme={darkTheme}>
                    {title}
                  </Title>
                  <Text small darkTheme={darkTheme}>
                    {name}
                  </Text>
                  <Flex list as="ul">
                    <ListItem>
                      <Text small darkTheme={darkTheme}>
                        {viewCount} views
                      </Text>
                    </ListItem>
                    <ListItem time>
                      <Text small darkTheme={darkTheme}>
                        {time[1]} years ago
                      </Text>
                    </ListItem>
                  </Flex>
                </Flex>
              </Flex>
            </Link>
          </li>
        )
      }}
    </AppContext.Consumer>
  )
}

export default VideoItem
