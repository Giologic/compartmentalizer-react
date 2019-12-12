
const LocalStorageService = ( () => {
  var _service;

  const _getService = () => {
    if(!_service) {
      _service = this;
      return _service
    }
  }

  const _setToken = (tokenObj) => {
    localStorage.setItem('access', tokenObj.access);
    localStorage.setItem('refresh', tokenObj.refresh);
  }

  const _refreshToken = (accessObj) => {
    localStorage.setItem('access', accessObj.access)
  }

  const _getAccessToken = () => {
    return localStorage.getItem('access')
  }

  const _getRefreshToken = () => {
    return localStorage.getItem('refresh')
  }

  const _clearToken = () => {
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
  }

  return {
    getService: _getService,
    setToken: _setToken,
    refreshToken: _refreshToken,
    getAccessToken: _getAccessToken,
    getRefreshToken: _getRefreshToken,
    clearToken: _clearToken
  }
})();

export default LocalStorageService