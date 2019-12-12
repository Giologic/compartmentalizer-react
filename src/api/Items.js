import instance from './Base'

const listItems = () => {
  return instance({
    method: 'get',
    url: '/inventory/component/',
    data: {}
  })
}

const createItem = (item) => {
  return instance({
    method: 'post',
    url: '/inventory/component/',
    data: {
      ...item
    }
  })
}

const itemsAPI = {
  listItems,
  createItem,
}

export default itemsAPI