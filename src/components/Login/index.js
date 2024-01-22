import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import AppContext from '../../Context/context'
import {
  LoginContainer,
  LoginCard,
  Label,
  Input,
  Logo,
  Button,
  ShowPass,
  Flex,
  Error,
} from './styledComponent'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    checkbox: false,
    errorText: '',
    error: false,
  }

  fetchData = async () => {
    const {username, password} = this.state
    const userDetails = {username, password}
    const option = {method: 'POST', body: JSON.stringify(userDetails)}
    const response = await fetch('https://apis.ccbp.in/login', option)
    const data = await response.json()
    if (response.ok) {
      const {history} = this.props
      Cookies.set('jwt_token', data.jwt_token)
      history.replace('/')
    } else {
      this.setState({error: true, errorText: data.error_msg})
    }
  }

  changeUser = event => this.setState({username: event.target.value})

  changePass = event => this.setState({password: event.target.value})

  checkbox = event => this.setState({checkbox: event.target.checked})

  render() {
    const {checkbox, error, errorText} = this.state
    const jwt = Cookies.get('jwt_token')
    if (jwt !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <AppContext.Consumer>
        {value => {
          const {darkTheme} = value

          return (
            <LoginContainer darkTheme={darkTheme}>
              <LoginCard darkTheme={darkTheme}>
                <Logo
                  src={
                    darkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                />
                <Label htmlFor="user" darkTheme={darkTheme}>
                  USERNAME
                </Label>
                <Input
                  darkTheme={darkTheme}
                  id="user"
                  placeholder="Username"
                  type="text"
                  onChange={this.changeUser}
                />

                <Label htmlFor="pass" darkTheme={darkTheme}>
                  PASSWORD
                </Label>
                <Input
                  id="pass"
                  darkTheme={darkTheme}
                  placeholder="Password"
                  type={checkbox ? 'text' : 'password'}
                  onChange={this.changePass}
                />
                <Flex>
                  <Input
                    type="checkbox"
                    onChange={this.checkbox}
                    darkTheme={darkTheme}
                    check
                  />
                  <ShowPass darkTheme={darkTheme}>Show Password</ShowPass>
                </Flex>
                <Button type="button" onClick={this.fetchData}>
                  Login
                </Button>
                {error && <Error>*{errorText}</Error>}
              </LoginCard>
            </LoginContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Login
