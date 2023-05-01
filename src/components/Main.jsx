import React from 'react'
import Dash from './Dash'
import Details from './Details'
import Title from './Title'

export default function Main() {
  return (
    <div>
        <div style={{width: "70%", marginLeft: "15%", marginTop: "25px"}}>
            <Title />
            <Dash />
            <Details />
        </div>
    </div>
  )
}
