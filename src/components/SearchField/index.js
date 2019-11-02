import React from 'react'

const SearchField = () => {
  return (
    <div class="field">
      <div class="control has-icons-left is-loading">
        <input class="input" type="text" placeholder="Search" />
        <span class="icon is-small is-left">
          <i class="fas fa-search"></i>
        </span>
      </div>
    </div>
  )
}

export default SearchField
