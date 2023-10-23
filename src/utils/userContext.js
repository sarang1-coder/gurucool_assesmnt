import { createContext } from 'react'

// Creating a React Context
const UserContext = createContext({
  loggedInUser: 'USER',
})

export default UserContext