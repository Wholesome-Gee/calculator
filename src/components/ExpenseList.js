import React from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem';
import { MdDelete } from 'react-icons/md'

export default function ExpenseList({initialExpenses, handleDelete, handleEdit, clearItems}) {
  return (
    <>
      <ul className="list">
         {/* Expense Item */}
        {initialExpenses.map((expense)=>{
          return (
            <ExpenseItem
              expense={expense} 
              key={expense.id} 
              handleDelete={handleDelete} 
              handleEdit={handleEdit}
            />
          )
        })}
      </ul>
      {initialExpenses.length > 0 ? 
        <button 
          className='btn' 
          onClick={()=>{
            clearItems();
          }}>
            목록 지우기
            <MdDelete className='btn-icon'/>
        </button> :
        null
      }
    </>
  )
}

// import React from 'react'
// import './ExpenseList.css'
// import ExpenseItem from './ExpenseItem'
// import { MdDelete } from 'react-icons/md'

// function ExpenseList () {
//   return (
//     <>
//       <ul className="list">
//         {/* Expense Item */}
//         {this.props.initialExpenses.map((expense)=>{
//           return <ExpenseItem expense={expense} key={expense.id} handleDelete={this.props.handleDelete}></ExpenseItem>
//         })}
//       </ul>
//       <button className='btn'>
//         목록 지우기
//         <MdDelete className='btn-icon'></MdDelete>
//       </button>
//     </>
//   )
// }

// export default ExpenseList