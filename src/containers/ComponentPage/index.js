import React from 'react'
import './index.css'
import Item from '../../components/Item'
import SearchField from '../../components/SearchField'

const ComponentPage = () => {
  return (
    <div className="main-layout container">
      <div className="columns">
        <div className="column is-one-third">
          <SearchField />
        </div>
      </div>
      <div className="columns">
        <div className="column is-one-third"><Item name={"10 Ω Resistor 1% 0603"} price ={0.15}/></div>
        <div className="column is-one-third"><Item name={"10 Ω Resistor 1% 0603"} price ={0.15}/></div>
        <div className="column is-one-third"><Item name={"10 Ω Resistor 1% 0603"} price ={0.15}/></div>
      </div>
      <div className="columns">
        <div className="column is-one-third"><Item name={"10 Ω Resistor 1% 0603"} price ={0.15}/></div>
        <div className="column is-one-third"><Item name={"10 Ω Resistor 1% 0603"} price ={0.15}/></div>
        <div className="column is-one-third"><Item name={"10 Ω Resistor 1% 0603"} price ={0.15}/></div>
      </div>
    </div>
  )
}

export default ComponentPage
