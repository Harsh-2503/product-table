import React from 'react'
import './Modal.css'

export default function Modal(props) {
  return (

    <div className={props.modal?"container " + "modal-none":"container"}>
    {/* <div className={modal?"container":""}> */}
      <div className='modal'>
        <div className="modal-header">{props.modal_name}</div>
        <div className="modal-body">
          <div className='label'  >Name</div>
          <input type="text" name="" id="" value={props.name} onChange={props.nchange} />
          <div className='label' >Prize</div>
          <input type="text" name="" id="" value={props.prize} onChange={props.pchange} />
          <div className='label'>Quantity</div>
          <input type="text" name="" id="" value={props.quantity} onChange={props.qchange} />
        </div>
        <div className="modal-footer">
          <button type='button' onClick={props.submit}>Submit</button>
          <button type='button' onClick={props.close}>Close</button>
        </div>
      </div>
    </div>
  )
}
