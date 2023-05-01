import React from 'react'

export default function Dash() {
  return (
    <div>
      <div className='col'>
        <div className='row' style={{marginLeft: "10px", marginTop: "15px", fontWeight: "bold", fontSize: "20px"}}>
          We are an online brand focusing on fresh meat and ready-to-cook/eat products. 
        </div>

        <div className='row' style={{marginLeft: "10px", color: "grey", fontSize: "14px"}}>
          <div className='col-1'>https://www.zappfresh.com</div>
          <div className='col-2' style={{marginLeft: "30px"}}>AAFCD3598N</div>
        </div>

        <hr style={{marginBottom: "0"}} />
        <div className='row mt-0'>
          <div className='col'>
            <iframe width="880" height="350" src="https://www.youtube.com/embed/H1M1prVk-kI" title="Zappfresh for Pepcorns" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          
          <div className='col' style={{paddingLeft: "40px", paddingRight: "60px", paddingTop: "10px"}}>
            <div className='row' style={{marginTop: "20px", marginLeft: "10px", fontWeight: "bold", fontSize: "20px", color: "rgb(70, 70, 70)"}}>₹8000</div>
            <div className='row' style={{fontSize: "12px", marginLeft: "10px", color: "rgb(70, 70, 70)"}}>0.16 % of minimum goal raised</div>
            <hr />
            <div className='row' style={{marginTop: "20px", marginLeft: "10px", fontWeight: "bold", fontSize: "20px", color: "rgb(70, 70, 70)"}}>4</div>
            <div className='row' style={{fontSize: "12px", marginLeft: "10px", color: "rgb(70, 70, 70)"}}>Total Investors</div>
            <hr />
            <div className='row' style={{marginTop: "20px", marginLeft: "10px", fontWeight: "bold", fontSize: "20px", color: "rgb(70, 70, 70)"}}>6 Days</div>
            <div className='row' style={{fontSize: "12px", marginLeft: "10px", color: "rgb(70, 70, 70)"}}>Left to invest</div>
            <div className='row'>
              <button className='btn btn-dark text-light' style={{marginTop: "20px", marginLeft: "10px", width: "320px"}}>Invest Now</button>
            </div>
            <div className='row' style={{fontSize: "12px", marginTop: "10px", marginLeft: "80px", color: "rgb(70, 70, 70)"}}>₹1000 Minimum Investment</div>
          </div>
        </div>
        <hr style={{marginTop: "0"}} />
      </div>
    </div>
  )
}
