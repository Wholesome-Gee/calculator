import React from'react'
import './ExpenseForm.css'
import { MdSend } from 'react-icons/md'

export default function ExpenseForm({charge,handleCharge,amount,handleAmount,handleSubmit,edit}) {
    return (
      <form onSubmit={handleSubmit}>
        <div className='form-center'>
          <div className='form-group'>
            <label htmlFor='charge'>지출 항목</label>
            <input type='text' className='form-control' id='charge' name='charge' placeholder='예) 렌트비' value={charge} onChange={handleCharge}/>
          </div>
          <div className='form-group'>
          <label htmlFor='amount'>비용</label>
          <input type='number' className='form-control' id='amount' name='amount' placeholder='예) 100' value={amount} onChange={handleAmount}/>
          </div>
        </div>
        <button type='submit' className='btn'>
          {edit ? "수정" : "제출"}
          <MdSend className='btn-icon'></MdSend>
          </button>
      </form>
    )
  }

// import React, { Component } from 'react'
// import './ExpenseForm.css'
// import { MdSend } from 'react-icons/md'

// export class ExpenseForm extends Component {
//   render() {
//     console.log(this.props.name);
    
    
//     return (
//       <form>
//         <div className='form-center'>
//           <div className='form-group'>
//             <label htmlFor='charge'>지출 항목</label>
//             <input type='text' className='form-control' id='charge' name='charge' placeholder='예) 렌트비'/>
//           </div>
//           <div className='form-group'>
//           <label htmlFor='amount'>비용</label>
//           <input type='number' className='form-control' id='amount' name='amount' placeholder='예) 100'/>
//           </div>
//         </div>
//         <button type='submit' className='btn'>
//           제출
//           <MdSend className='btn-icon'></MdSend>
//           </button>
//       </form>
//     )
//   }
// }

// export default ExpenseForm