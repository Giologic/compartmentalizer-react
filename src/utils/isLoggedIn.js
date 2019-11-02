import LocalStorageService from "../api/LocalStorageService"

const isLoggedIn = () => {
  console.log("Storage", LocalStorageService.getRefreshToken())
  if(!LocalStorageService.getRefreshToken() || LocalStorageService.getRefreshToken() === null) {
    return false
  } else return true
}

export default isLoggedIn