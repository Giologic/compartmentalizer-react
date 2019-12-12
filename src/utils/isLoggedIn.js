import LocalStorageService from "../api/LocalStorageService"

const isLoggedIn = () => {
  if(!LocalStorageService.getRefreshToken() || LocalStorageService.getRefreshToken() === null) {
    return false
  } else return true
}

export default isLoggedIn