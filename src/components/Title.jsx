import React from 'react'


export default function Title() {
  return (
    <div>
        <div className='col'>
            <div className='row text-secondary'>{"< "}Back</div>
            <div className='row mt-4'>
                <div className='col mt-3'>
                    <img src="https://api.pepcorns.com/clientassets/icon1677177731365.png" width="50px" style={{marginRight: "100%"}}/>
                </div>
                <div className='col-10'>
                    <div className='row' style={{fontWeight: "bold", fontSize: "30px"}}>Zappfresh</div>
                    <div className='row' style={{color: "grey"}}>New Delhi, Delhi</div>
                </div>
                <div className='col' style={{width: "30px"}}> 
                    <button className='btn btn-outline-primary mt-3'>Save</button>
                </div>
                <div className='col'>
                    <button className='btn btn-outline-primary mt-3'>Share</button>
                </div>
            </div>
            <div><hr /></div>
            <div className='row'>
                <div className='col-1' style={{fontSize: "11px", backgroundColor: "rgb(233, 245, 237)", width: "90px"}}># Farm Fresh</div>
                <div className='col-1 ml-1' style={{fontSize: "11px", backgroundColor: "rgb(249, 250, 237)", width:"80px"}}># Other</div>
            </div>
        </div>

    </div>
  )
}
