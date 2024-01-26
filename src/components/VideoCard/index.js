import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import AppContext from '../../Context/context'
import {ItemCard, Flex, Img, Title, Text, ListItem} from './styled'

const VideoCard = props => {
  const {item} = props
  const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = item
  const {name, profileImageUrl} = channel
  const time = formatDistanceToNow(new Date(publishedAt)).split(' ')

  return (
    <AppContext.Consumer>
      {value => {
        const {darkTheme} = value

        return (
          <ItemCard as="li">
            <Link to={`/videos/${id}`} className="link">
              <Img src={thumbnailUrl} alt="video thumbnail" />
              <Flex>
                <Img channel src={profileImageUrl} alt="channel logo" />
                <div>
                  <Title darkTheme={darkTheme}>{title}</Title>
                  <Text darkTheme={darkTheme} name>
                    {name}
                  </Text>
                  <Flex list as="ul">
                    <ListItem>
                      <Text darkTheme={darkTheme} name>
                        {viewCount} views
                      </Text>
                    </ListItem>
                    <ListItem darkTheme={darkTheme} time>
                      <Text darkTheme={darkTheme} name>
                        {time[1]} years ago
                      </Text>
                    </ListItem>
                  </Flex>
                </div>
              </Flex>
            </Link>
          </ItemCard>
        )
      }}
    </AppContext.Consumer>
  )
}

export default VideoCard
