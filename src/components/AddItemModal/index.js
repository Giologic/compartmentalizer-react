import React from 'react'

const AddItemModal = ({ isActive, item, handleCancel, handleSubmit,  handleChange}) => {

  const status = isActive ? 'is-active' : ''
  
  return (
    <div class={`modal ${status}`}>
      <div class="modal-background"></div>
        <div class="modal-card">
          <form onSubmit={handleSubmit}>
          <header className="modal-card-head">
            <h1 className='title'> Add Item </h1>
          </header>
          <section class="modal-card-body">
            <div className="field">
              <div class="control">
                <input class="input" type="text" name="name" placeholder="Name" value={item.name} onChange={handleChange} required/>
              </div>
            </div>
              
            <div className="field">
              <div class="control">
              <input class="input" type="number" name="price" defaultValue={0} value={item.price} onChange={handleChange} required/>
              </div>
            </div>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-link" type="submit">Submit</button>
            <button class="button" type="submit" onClick={ handleCancel }>Cancel</button>
          </footer>
          </form>
        </div>
      </div>
  )
}

export default AddItemModal
