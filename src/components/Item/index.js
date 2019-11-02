import React from 'react'

const Item = (props) => {

  const {name, price} = props
  return (
    <div class="box">
      <article class="media">
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{ name }</strong>
              <br />
              Price: <span className="tag">{price}</span>
            </p>
          </div>
          <nav class="level is-mobile">
            {/* <div class="level-left">
              <a class="level-item" aria-label="reply">
                <span class="icon is-small">
                  <i class="fas fa-reply" aria-hidden="true"></i>
                </span>
              </a>
            </div> */}
            <div className="button is-link">View</div>
          </nav>
        </div>
      </article>
    </div>
  )
}

export default Item
