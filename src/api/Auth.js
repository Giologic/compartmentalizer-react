import instance from './Base'
import LocalStorageService from './LocalStorageService'

const login = ({username, password}) => {
  return instance({
    method: 'post',
    url: '/auth/token/',
    data: {
      username,
      password
    }
  })
}

const authAPI = {
  login
}

export default authAPI