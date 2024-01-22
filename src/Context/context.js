import React from 'react'

const AppContext = React.createContext({
  darkTheme: false,
  changeTheme: () => {},
  list: [],
  addToSaveList: () => {},
})

export default AppContext
