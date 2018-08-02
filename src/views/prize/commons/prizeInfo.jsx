import React from 'react'
import moment from 'moment'

const PrizeInfo = props => {
  return (
    <div>
      {props.prize.id ? <div className="box">
        <div className="box-body">
          <div className='row'>
            <div className='col-lg-2'>
              <div className='img-thumbnail square-img'>
                <img src={props.prize.imageSmall} alt='Game'/>
              </div>
            </div>
            <div className='col-lg-10'>
              <h3>{props.prize.title}</h3>
              <div>
                <p><span className='prize-label'>Game Type:</span><span className='prize-value'>Game {props.prize.funType.family.id}</span></p>
                <p><span className='prize-label'>Publish Date:</span><span className='prize-value'>{moment(props.prize.publishDate).format('DD-MMM-YYYY')}</span></p>
                <p><span className='prize-label'>Date Created:</span><span className='prize-value'>{moment(props.prize.createDate).format('DD-MMM-YYYY')}</span>
                </p>
                <p><span className='prize-label'>Created By:</span><span
                  className='prize-value'>{props.prize.source.displayName}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div> : null}
    </div>

  )
};

export default PrizeInfo
