import React, { Component } from 'react'
import loading from './undefined - Imgur.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={loading} alt={loading} style={{width :'80px',position:'relative',top:'400px',left:'100'}}/>
      </div>
    )
  } 
}
