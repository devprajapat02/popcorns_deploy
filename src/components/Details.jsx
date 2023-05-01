import React from 'react'

export default function Details() {
  return (
    <div>
        <div className='col'>
            <div className='row mt-5'>
                <div className='col-1'>
                    <button className='btn' style={{backgroundColor: "black", color: "white", borderRadius: "50px", borderColor: "black"}}>Pitch</button>
                </div>
                <div className='col' style={{marginRight: "0px"}}>
                    <button className='btn' style={{backgroundColor: "white", color: "black", borderRadius: "50px", borderColor: "black"}}>Details</button>
                </div>
                <div className='col'>
                    <button className='btn' style={{backgroundColor: "white", color: "black", borderRadius: "50px", borderColor: "black"}}>Discussions</button>
                </div>
                <div className='col' style={{marginRight: "800px"}}>
                    <button className='btn' style={{backgroundColor: "white", color: "black", borderRadius: "50px", borderColor: "black"}}>Updates</button>
                </div>
                <hr style={{marginTop: "15px"}}/>
            </div>

            
        </div>
    </div>
  )
}
