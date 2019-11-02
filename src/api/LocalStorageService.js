
const LocalStorageService = ( () => {
  var _service;

  const _getService = () => {
    if(!_service) {
      _service = this;
      return _service
    }
  }

  const _setToken = (tokenObj) => {
    localStorage.setItem('access_token', tokenObj.access);
    localStorage.setItem('refresh_token', tokenObj.refresh);
  }

  const _getAccessToken = () => {
    return localStorage.getItem('access_token')
  }

  const _getRefreshToken = () => {
    return localStorage.getItem('refresh_token')
  }

  const _clearToken = () => {
    localStorage.setItem('access_token', '')
    localStorage.setItem('refresh_token', '')
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
  }

  return {
    getService: _getService,
    setToken: _setToken,
    getAccessToken: _getAccessToken,
    getRefreshToken: _getRefreshToken,
    clearToken: _clearToken
  }
})();

export default LocalStorageService