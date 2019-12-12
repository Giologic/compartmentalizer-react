import React from 'react'
import './index.css'
const Item = (props) => {

  const {name, price, link} = props
  return (
    <div class="box">
      <article class="media">
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{ name }</strong>
              <br />
              Price: ₱ {price}
              <div className="tag-group">
                <div class="field is-grouped is-grouped-multiline">
                  <div class="control">
                    <a class="tag">Resistors</a>
                  </div>

                  <div class="control">
                    <a class="tag">LEDs and Lighting</a>
                  </div>
                </div>
              </div>
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
