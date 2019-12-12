import instance from './Base'

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