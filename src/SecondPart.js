import React from 'react'
import './Second.css';

export default function SecondPart() {
  return (
    <>
    <div className='outer-container'>
        {/* <div>
        <button className="btn btn-1">Expires in <span>7 days</span></button>
        </div> */}
        <div className='inner-container'>
        <button className='btn btn-2'>Expires in <span>7 days</span></button>
        <button className='btn btn-3'>Upgrade</button>
        <p>If you want to learn more about the product and features, please reach out to <a href='#'>help@viduthalai.com</a> or get a <a href='#'>free 1-1 demo</a> now.</p>
        </div>
    </div>
    </>
  )
}


