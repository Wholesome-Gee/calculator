import React, { Component } from 'react'
import './ExpenseItem.css'
import { MdDelete, MdEdit } from 'react-icons/md'

export class ExpenseItem extends Component {
  render() {
    // console.log(this.props.expense);
    
    return (
      <li className='item'>
        <div className='info'>
          <span className='expense'>{this.props.expense.charge}</span>
          <span className='amount'>{this.props.expense.amount}원</span>
        </div>
        <div>
          <button className='edit-btn'>
            <MdEdit></MdEdit>
          </button>
          <button className='clear-btn'>
            <MdDelete onClick={()=>{this.props.handleDelete(this.props.expense.id)}}></MdDelete>
          </button>
        </div>
      </li>
    )
  }
}

export default ExpenseItem