import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import AppContext from './Context/context'
import Login from './components/Login'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

class App extends Component {
  state = {darkTheme: false, list: []}

  changeTheme = () => this.setState(pre => ({darkTheme: !pre.darkTheme}))

<<<<<<< HEAD
  addToSaveList = item => this.setState(pre => ({list: [...pre.list, item]}))

  deleteFromList = id => {
    const {list} = this.state
    const removed = list.filter(each => each.id !== id)
    this.setState({list: removed})
=======
  addToSaveList = item => {
    const {list} = this.state
    const found = list.find(each => each.id === item.id)
    console.log(found)
    if (found === undefined) {
      this.setState(pre => ({list: [...pre.list, item]}))
    } else {
      const removed = list.filter(each => each.id !== item.id)
      this.setState({list: removed})
    }
>>>>>>> ecb772aefd667f5e8f4815f26b161c6f0d9df1dc
  }

  render() {
    const {darkTheme, list} = this.state

    return (
      <AppContext.Provider
        value={{
          darkTheme,
          changeTheme: this.changeTheme,
          list,
          addToSaveList: this.addToSaveList,
<<<<<<< HEAD
          deleteFromList: this.deleteFromList,
=======
>>>>>>> ecb772aefd667f5e8f4815f26b161c6f0d9df1dc
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
<<<<<<< HEAD
          <Route exact path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
=======
          <Route exact path="bad-path" component={NotFound} />
          <Redirect to="bad-path" />
>>>>>>> ecb772aefd667f5e8f4815f26b161c6f0d9df1dc
        </Switch>
      </AppContext.Provider>
    )
  }
}

export default App
