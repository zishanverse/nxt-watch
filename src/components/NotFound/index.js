import NavBar from '../NavBar'
import SideBar from '../SideBar'
import AppContext from '../../Context/context'
import FailureViewCard from '../FailureViewCard'
import {MainContainer, Page} from '../../styledComponent'

const NotFound = () => (
  <AppContext.Consumer>
    {value => {
      const {darkTheme} = value

      return (
        <>
          <NavBar />
          <Page>
            <SideBar />
            <MainContainer darkTheme={darkTheme}>
              <FailureViewCard notfound />
            </MainContainer>
          </Page>
        </>
      )
    }}
  </AppContext.Consumer>
)

export default NotFound
