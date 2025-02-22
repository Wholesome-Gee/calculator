import React from 'react'
import './ExpenseItem.css'
import { MdDelete, MdEdit } from 'react-icons/md'

export default function ExpenseItem({expense, handleDelete, handleEdit}) {
    return (
      <li className='item'>
        <div className='info'>
          <span className='expense'>{expense.charge}</span>
          <span className='amount'>{expense.amount}원</span>
        </div>
        <div>
          <button className='edit-btn' onClick={()=>{handleEdit(expense.id)}}>
            <MdEdit></MdEdit>
          </button>
          <button className='clear-btn'>
            <MdDelete onClick={()=>{handleDelete(expense.id)}}/>
          </button>
        </div>
      </li>
    )
  }