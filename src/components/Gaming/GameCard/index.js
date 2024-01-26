import {Link} from 'react-router-dom'
import AppContext from '../../../Context/context'
import {Flex, Title, Text, Img} from '../../../styledComponent'

<<<<<<< HEAD
const GameCard = props => {
=======
const VideoItem = props => {
>>>>>>> ecb772aefd667f5e8f4815f26b161c6f0d9df1dc
  const {item} = props
  const {id, thumbnailUrl, title, viewCount} = item

  return (
    <AppContext.Consumer>
      {value => {
        const {darkTheme} = value

        return (
<<<<<<< HEAD
          <Flex as="li" column game>
=======
          <Flex column game>
>>>>>>> ecb772aefd667f5e8f4815f26b161c6f0d9df1dc
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

<<<<<<< HEAD
export default GameCard
=======
export default VideoItem
>>>>>>> ecb772aefd667f5e8f4815f26b161c6f0d9df1dc
