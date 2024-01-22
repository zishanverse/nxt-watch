import {withRouter} from 'react-router-dom'
import AppContext from '../../Context/context'
import {FailureView, ErrorHead, ErrorPara, Btn, Img} from './styled'

const FailureViewCard = props => {
  const view = darkTheme => {
    const {func, failure, savedVideos, notfound} = props
    const {match} = props
    const {path} = match
    let imageUrl
    let altValue
    let errorHead
    let errorPara

    if (failure) {
      imageUrl = darkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
      altValue = 'failure view'
      errorHead = 'Oops! Something Went Wrong'
      errorPara =
        'We are having some trouble to complete your request. Please try again.'
    } else if (path === '/saved-videos') {
      imageUrl =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png'
      altValue = 'no saved videos'
      errorHead = 'No Saved videos found'
      errorPara = 'you can save your videos while watching them'
    } else if (notfound) {
      imageUrl = darkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      altValue = 'not found'
      errorHead = 'Page Not Found'
      errorPara = 'We are sorry, the page you requested could not be found.'
    } else {
      imageUrl =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png'
      altValue = 'no videos'
      errorHead = 'No Search results found!'
      errorPara = 'Try different key words or remove search filter'
    }

    return (
      <FailureView>
        <Img src={imageUrl} alt={altValue} />
        <ErrorHead darkTheme={darkTheme}>{errorHead}</ErrorHead>
        <ErrorPara darkTheme={darkTheme}>{errorPara}</ErrorPara>
        {savedVideos || notfound ? null : (
          <Btn type="button" onClick={() => func()}>
            Retry
          </Btn>
        )}
      </FailureView>
    )
  }
  return (
    <AppContext.Consumer>
      {value => {
        const {darkTheme} = value
        return view(darkTheme)
      }}
    </AppContext.Consumer>
  )
}

export default withRouter(FailureViewCard)
