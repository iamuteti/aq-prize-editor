import React from 'react'

const PrizeInfo = (props) => {
  return (
    <div className="box">
      <div className="box-body">
        <div className='row'>
          <div className='col-lg-2'>
            <div className='img-thumbnail'>
              <img src='http://via.placeholder.com/100x200' alt='Game 2' />
            </div>
          </div>
          <div className='col-lg-10'>
            <h3>Digital Race</h3>
            <div>
              <p><span className='prize-label'>Game Type:</span><span className='prize-value'>Game 2</span></p>
              <p><span className='prize-label'>Publish Date:</span><span className='prize-value'>1-Mar-2018</span></p>
              <p><span className='prize-label'>Date Created:</span><span className='prize-value'>26-Feb-2018</span></p>
              <p><span className='prize-label'>Created By:</span><span className='prize-value'>UA Admin 1</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PrizeInfo
