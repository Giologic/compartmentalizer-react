import React, {useState, useEffect} from 'react'
import './index.css'
import Item from '../../components/Item'
import SearchField from '../../components/SearchField'
import itemsAPI from '../../api/Items'
import AddItemModal from '../../components/AddItemModal'
import useForm from '../../utils/useForm'
import RowSet from '../../components/RowSet'

const ComponentPage = () => {

  
  const [items, setItems] = useState([])
  const [isActive, setIsActive] = useState(false)
  
  const renderItems = () => {
    let accumulatedItems = []
    let renderBlock = []
    
    items.forEach((item, index) => {
      let content = (
        <div className="column is-one-third">
         <Item name={item.name} price={item.price} link={item.link} />
        </div>
      )
      accumulatedItems.push(content)
      if(accumulatedItems.length >= 3 || index === items.length-1) {
        renderBlock.push(
          <RowSet>
            { accumulatedItems }
          </RowSet>
        )
        accumulatedItems = []
      }
    })

    return renderBlock
  }

  const modalHandler = () => {
    setIsActive(true)
  }

  const handleCancel = (e) => {
    e.preventDefault()
    setIsActive(false)
  }

  const submitItem = async () => {
    setIsActive(false)

    await itemsAPI.createItem(values).then( response => {
      const item = response.data
      setItems([...items, item])
    }).catch( error => {
      console.log(error)
    })
  }

  const defaultItem = {
    name: '',
    price: 0
  }

  const { values, handleChange, handleSubmit } = useForm(submitItem, defaultItem)



  useEffect(() => {
    itemsAPI.listItems().then(
      response => {
        setItems(response.data)
      }
    ).catch( err => {
      console.log(err)
    })
  }, []);
  return (
    <div className="main-layout container">
      <AddItemModal 
        isActive={isActive} 
        item={values}
        handleCancel={handleCancel} 
        handleSubmit={handleSubmit} 
        handleChange={handleChange}
      />
      <div className="columns">
        <div className="column is-one-third">
          <SearchField />
        </div>
        <div className="column is-one-third">
        </div>
        <div className="column is-one-third" style={{'textAlign': 'right'}}>
            <button className="button is-link" onClick={modalHandler}>
              Add Item
            </button>
        </div>
      </div>
      { renderItems() }
    </div>
  )
}

export default ComponentPage
